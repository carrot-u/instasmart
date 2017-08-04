class TaggingSerializer < ActiveModel::Serializer
  attributes :id, :tag_id, :taggable_id, :taggable_type, :tagger_id
end
