class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :description, :shoe_id
  belongs_to :shoe
end
