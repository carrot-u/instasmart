class AnswerSerializer < ActiveModel::Serializer
  attributes :id, :response, :user_id, :accepted, :cached_votes_up, :cached_votes_down
end
