class PeriodsController < ApplicationController
	def index
  		@periods = Period.all
 	end
end
