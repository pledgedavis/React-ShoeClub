class ShoeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :size, :price
  has_many :comments
end
