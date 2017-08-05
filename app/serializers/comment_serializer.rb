class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :user, :cached_votes_up, :cached_votes_down

  private
		def user
			UserSerializer.new(object.user).attributes
		end
end
