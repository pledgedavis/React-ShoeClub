class Brand < ApplicationRecord
    has_many :shoes
    has_many :users, through: :shoes
   
    # validates :company_name, presence: true 
    # validates :company_name, uniqueness: true 
    # scope :order_by_name, -> {order(company_name: :asc)}
      
end
