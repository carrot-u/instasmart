class QuestionSerializer < ActiveModel::Serializer
	include ActionView::Helpers::DateHelper
  attributes :id, :summary, :body, :user_id, :cached_votes_up, :cached_votes_down, :answers, :comments, :tags

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

end
