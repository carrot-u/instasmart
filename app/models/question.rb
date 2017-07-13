class Question < ActiveRecord::Base
  belongs_to :user
  has_many :answers
  has_many :comments
  default_scope { order(created_at: :desc) }
end
