class ShoesController < ApplicationController
    before_action :shoe_inst, only: [:show, :destroy]

    
    def index 
      shoes = Shoe.all
      render json: shoes, include: [:comments]
    end

    def show 
        render json: @shoe
    end


    
  def create
    @shoe = Shoe.new(shoe_params)

    if @shoe.save
      render json: @shoe, status: :created, location: @shoe
    else
      render json: @shoe
    end
  end

 
  def update
    if @shoe.update(shoe_params)
      render json: @shoe
    else
      render json: @shoe
    end
  end

  def destroy
    @shoe.destroy
  end

    private 

    def shoe_inst
        @shoe = Shoe.find(params[:id])
      end
  
    def shoe_params 
        params.require(:shoe).permit(:id, :name, :size, :price, :image)
    end
end
