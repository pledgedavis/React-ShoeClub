class Shoe < ApplicationRecord
    belongs_to :brand
    belongs_to :user
    # scope :ordered, -> {order(name: :asc)}
      
    accepts_nested_attributes_for :brand, reject_if: :all_blank

end
