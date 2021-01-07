class ShoeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :size, :price, :image, :brand_id, :user_id 
end
