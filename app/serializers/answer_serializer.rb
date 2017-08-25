class AnswerSerializer < ActiveModel::Serializer
  include ActionView::Helpers::DateHelper
  attributes :id, :response, :accepted, :cached_votes_up, :cached_votes_down, :cached_votes_score, :created_at, :user, :comments
  
  def created_at
    time_ago_in_words(object.created_at)
  end
  
end
