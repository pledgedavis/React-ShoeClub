class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :description, :shoe_id
  belongs_to :shoe
end
