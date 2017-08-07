class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :summary, :body, :user, :cached_votes_up, :cached_votes_down, :answers, :comments, :taggings, :tags, :created_at

  has_one :user
  has_many :answers, include_nested_associations: true
  has_many :comments, include_nested_associations: true
  has_many :taggings, include_nested_associations: true
  has_many :tags, include_nested_associations: true

  def created_at
  	self.object.created_at.strftime("%Y/%m/%d %H:%M:%S")
  end
end

