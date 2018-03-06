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
		@character = @period.characters.create(character_params)

		if @character.save
			redirect_to @character
		else
			render 'new'
		end
	end

	private 
	def character_params
		p params.require(:character).permit(:name, :body, :period_id)
	end
end