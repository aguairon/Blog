class CharactersController < ApplicationController
	def index
		@characters = Character.All
	end

	def show
    	@article = Article.find(params[:id])
  	end

	def new
		@character = Character.new	
		@character.period = Period.find(params[:period_id])
	end

	private 
	def character_params
		params.require(:character).permit(:name, :text, :period_id)
	end
end