class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :summary, :body, :user, :cached_votes_up, :cached_votes_down, :answers, :comments, :taggings, :created_at

  has_one :user
  has_many :answers, include_nested_associations: true
  has_many :comments, include_nested_associations: true
  has_many :taggings, include_nested_associations: true
  has_many :tags, include_nested_associations: true

end

