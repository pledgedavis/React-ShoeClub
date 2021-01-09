class BrandsController < ApplicationController

    
    def index 
        brand = Brand.all
        render json: brand
      end
end
