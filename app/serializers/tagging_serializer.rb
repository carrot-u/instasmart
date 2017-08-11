class TaggingSerializer < ActiveModel::Serializer
  attributes :id, :tag_id, :taggable_id, :tagger_id
end
