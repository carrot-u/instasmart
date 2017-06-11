class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  # ActsAsTaggableOn.default_parser = ' '

  def full_name
    first_name + ' ' + last_name
  end
end
