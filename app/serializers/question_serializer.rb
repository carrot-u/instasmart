class QuestionSerializer < ActiveModel::Serializer
	include ActionView::Helpers::DateHelper
  attributes :id, :summary, :body, :user_id, :cached_votes_up, :cached_votes_down, :answers, :comments, :tags, :created_time_date

  def created_time_date
  	object.created_at.in_time_zone("Pacific Time (US & Canada)").strftime("%b. %e, %Y at %l:%M %p")
  end

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
