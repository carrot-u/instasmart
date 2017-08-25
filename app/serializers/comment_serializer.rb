class CommentSerializer < ActiveModel::Serializer
  include ActionView::Helpers::DateHelper
  attributes :id, :body, :cached_votes_up, :cached_votes_down, :user, :created_at

	# has_one :user

  def created_at
    time_ago_in_words(object.created_at)
  end
end
