class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :cached_votes_up, :cached_votes_down, :created_at, :user,

	# has_one :user
end
