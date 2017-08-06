class AnswerSerializer < ActiveModel::Serializer
  attributes :id, :response, :user, :accepted, :cached_votes_up, :cached_votes_down, :created_at, :comments

has_one :user
has_many :comments
  # private
		# def user
		# 	UserSerializer.new(object.user).attributes
		# end
end
