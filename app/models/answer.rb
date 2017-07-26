class Answer < ActiveRecord::Base

  belongs_to :user
  belongs_to :question
  has_many :comments, as: :commentable

  default_scope { order(created_at: :desc) }

  acts_as_votable
end
