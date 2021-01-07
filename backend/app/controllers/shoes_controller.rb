class ShoesController < ApplicationController
    before_action :shoe_inst, only: [:show, :destroy]

    
    def index 
      shoes = Shoe.all
      render json: shoes, include: [:brand]
    end

    def show 
        render json: @shoe
    end
    
    def update 
    end

    def destroy 
        @shoe.destroy
    end

    private 

    def shoe_inst
        @shoe = Shoe.find(params[:id])
      end
  
    def find_brand
        @brand= Brand.find_by(id: params[:brand_id])
    end
      
    def shoe_params 
        params.require(:shoe).permit(:name, :size, :price, :image, :user_id, :brand_id, brand_attributes:[ :id, :company_name])
    end
end
