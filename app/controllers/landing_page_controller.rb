class LandingPageController < ApplicationController
	before_action :tags

	def index
	end

	def tag_cloud
    
	end

	private
		def tags
			@tags = Question.tag_counts_on(:tags)
		end
end
