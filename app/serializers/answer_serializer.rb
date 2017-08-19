class AnswerSerializer < ActiveModel::Serializer
  attributes :id, :response, :accepted, :cached_votes_up, :cached_votes_down, :created_at, :user, :comments
  
end
