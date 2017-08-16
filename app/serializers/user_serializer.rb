class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :email, :oauth_token, :oauth_expires_at, :user_activity

def user_activity
  activity = []

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
  return activity.take(10)
end

end