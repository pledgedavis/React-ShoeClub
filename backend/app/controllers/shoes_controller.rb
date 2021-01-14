require 'pry'
class ShoesController < ApplicationController
    before_action :shoe_inst, only: [:show]

    
    def index 
      # binding.pry
      shoes = Shoe.all
      render json: shoes, include: [:comments]
    end

    def show 
        render json: @shoe, include: [:comments]
    end

    private 

    def shoe_inst
        @shoe = Shoe.find(params[:id])
      end
  
    def shoe_params 
        params.require(:shoe).permit(:id, :name, :image, :description)
    end
end
