class CharactersController < ApplicationController
	def index
		@period = Period.find(params[:period_id])
 		@characters = @period.characters
 		@props = {
 			title: "Personajes relacionados con #{@period.title}",
		  admin_signed_in: admin_signed_in?, 
		  path_title: 'Nuevo Personaje', 
		  path: new_character_path(period_id: @period)
		}
	end

	def show
  	@character = Character.find(params[:id])
  	@props = {
 			title: @character.name,
		  admin_signed_in: admin_signed_in?, 
		  path_title: 'Editar', 
		  path: edit_character_path(@character)
		}
  end

	def new
		@character = Character.new	
		@character.period = Period.find(params[:period_id])
	end

	def edit
  	@character = Character.find(params[:id])
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