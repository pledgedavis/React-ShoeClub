class ShoeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :size, :price, :image
  has_many :comments
end
