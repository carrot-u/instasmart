class User < ApplicationRecord
  has_many :questions
  has_many :answers
  has_many :comments

  def activities
    activity = []
    activity << comments
    activity << answers
    activity << questions
    activity.flatten
  end
end
