require 'pry'
class ShoesController < ApplicationController
    before_action :shoe_inst, only: [:show, :update]

    
    def index 
      # binding.pry
      shoes = Shoe.all
      render json: shoes, include: [:comments]
    end

    def show 
        render json: @shoe, include: [:comments]
    end


    def create 
     @shoe = Shoe.new(shoe_params)
      if @shoe.save
        render json: @shoe, status: :created, location: @shoe
      else 
        render json: @shoe.errors, status: :unprocessable_entity
      end
    end

    def update
      if @shoe.update(shoe_params)
        render json: @shoe
      else 
        render json: @shoe.errors, status: :unprocessable_entity
    end

    private 

    def shoe_inst
        @shoe = Shoe.find(params[:id])
      end
  
    def shoe_params 
        params.require(:shoe).permit(:id, :name, :image, :description)
    end
end
