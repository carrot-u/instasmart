class QuestionSerializer < ActiveModel::Serializer
  include ActionView::Helpers::DateHelper
  attributes :id, :summary, :body, :created_at, :updated_at, :cached_votes_up, :cached_votes_down, :views_count, :cached_votes_score, :votes_for

  has_one :user
  has_many :answers, include_nested_associations: true
  has_many :comments, include_nested_associations: true
  has_many :taggings, include_nested_associations: true
  has_many :tags, include_nested_associations: true

  def created_at
    time_ago_in_words(object.created_at)
  end

end

