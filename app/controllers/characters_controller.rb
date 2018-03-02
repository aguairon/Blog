class CharactersController < ApplicationController
	def index
		@period = Period.find(params[:period_id])
 		@characters = @period.characters
	end

	def show
    	@character = Character.find(params[:id])
  	end

	def new
		@character = Character.new	
		@character.period = Period.find(params[:period_id])
	end

	def create
		@period = Period.find(character_params[:period_id])
		@character = @period.character.create(character_params)

		if @article.save
			redirect_to @article
		else
			render 'new'
		end
	end

	private 
	def character_params
		params.require(:character).permit(:name, :text, :period_id)
	end
end