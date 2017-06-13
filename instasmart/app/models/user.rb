class User < ApplicationRecord
  has_many :questions
  has_many :answers
  has_many :comments

  acts_as_voter

  def activities
    activity = []
    activity << comments
    activity << answers
    activity << questions
    activity.flatten
  end

  def activity_path(activity)
    if activity.class == Question(id: integer, user_id: integer, body: text, active: boolean, created_at: datetime, updated_at: datetime)
      question_path(activity.id)
    end
  end
end
