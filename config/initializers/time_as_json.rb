require 'active_model_serializers'
require 'active_support/all'

ActiveSupport::JSON::Encoding.use_standard_json_time_format = false

module ActiveSupport
  class TimeWithZone
    def as_json(options = nil)
      if ActiveSupport::JSON::Encoding.use_standard_json_time_format
        xmlschema
      else
        %(#{time.strftime("%B %d, %Y, %l:%M %P")} #{formatted_offset(false)})
      end
    end
  end
end