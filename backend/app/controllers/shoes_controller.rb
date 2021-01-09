class ShoesController < ApplicationController
    before_action :shoe_inst, only: [:show, :destroy]

    
    def index 
      shoes = Shoe.all
      render json: shoes, include: [:comments]
    end

    def show 
        render json: @shoe
    end
    

    private 

    def shoe_inst
        @shoe = Shoe.find(params[:id])
      end
  
    def shoe_params 
        params.require(:shoe).permit(:name, :size, :price, :image)
    end
end
