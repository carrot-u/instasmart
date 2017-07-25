class Question < ActiveRecord::Base
  belongs_to :user
  has_many :answers
  has_many :comments, as: :commentable

  default_scope { order(created_at: :desc) }

  acts_as_votable
  acts_as_taggable
end
