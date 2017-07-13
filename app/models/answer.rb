class Answer < ActiveRecord::Base
  belongs_to :user
  belongs_to :question
  has_many :comments
  default_scope { order(created_at: :desc) }
end
