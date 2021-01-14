class ShoeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :image, :description, 
  has_many :comments
end
