class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :cached_votes_up, :cached_votes_down, :user, :created_at

	# has_one :user
end
