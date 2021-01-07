class ShoesController < ApplicationController

    def index 

    end

    def show 
    end
    
    def update 
    end

    def delete_all
    end

    private 

    def find_brand
        @brand= Brand.find_by(id: params[:brand_id])
    end
      
    def shoe_params 
        params.require(:shoe).permit(:name, :size, :price, :image, :user_id, :brand_id, brand_attributes:[ :id, :company_name])
    end
end
