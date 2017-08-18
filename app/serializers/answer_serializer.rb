class AnswerSerializer < ActiveModel::Serializer
  attributes :id, :response, :accepted, :cached_votes_up, :cached_votes_down, :created_at, :user_info

	# has_one :user
	has_many :comments

  private
    def user_info
      object.user.first_name
    end

end
