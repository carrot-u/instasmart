class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def full_name
    first_name + ' ' + last_name
  end
end
