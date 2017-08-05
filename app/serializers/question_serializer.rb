class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :summary, :body, :user, :cached_votes_up, :cached_votes_down, :answers, :comments, :tags, :created_at
  
  private
	  def answers
	  	AnswerSerializer.new(object.answers).attributes
	  end

	  def comments
	  	CommentSerializer.new(object.comments).attributes
	  end

	  def taggings
	  	TaggingSerializer.new(object.taggings).attributes
	  end

	  def user
	  	UserSerializer.new(object.user).attributes
	  end

end
