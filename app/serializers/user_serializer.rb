class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :email, :created_at, :user_question_activity, :user_answer_activity, :user_comment_activity, :user_votes_activity

  def user_votes_activity
    self.object.votes
  end

  def user_question_activity
    self.object.questions
  end

  def user_answer_activity
    self.object.answers
  end

  def user_comment_activity
    self.object.comments
  end

  def user_activity
    self.object.questions.each do |question|
      activity.push(question)
    end

    self.object.answers.each do |answer|
      activity.push(answer)
    end

    self.object.comments.each do |comment|
      activity.push(comment)
    end

    self.object.votes.each do |vote|
      activity.push(vote)
    end

    activity.sort_by! { |activity| activity.created_at }.reverse!
    return activity
  end

end