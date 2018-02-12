class WelcomeController < ApplicationController
  def index
  	@periods = Period.all
  end
end
