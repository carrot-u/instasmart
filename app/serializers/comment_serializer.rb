class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :cached_votes_up, :cached_votes_down

	has_one :user
end
