class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :user_id, :cached_votes_up, :cached_votes_down
end
