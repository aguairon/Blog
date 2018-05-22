class PeriodsController < ApplicationController
	def index
  		@periods = Period.all
 	end

 	def show
 		@period = Period.find(params[:id])
 		@articles = @period.articles.limit(5)
 		@characters = @period.characters.limit(2)
	 	@props = {
      title: {
        text: @period.title,
        admin_signed_in: admin_signed_in?, 
        path_title: 'Editar', 
        path: edit_period_path(@period),
      },
      articles: {
        title: 'Artículos',
        class_name: "section_articles",
        items: @articles,
        path: '/articles/',
        linked_items_path: articles_path(period_id: @period),
        linked_items_title: 'Más artículos'
      },
      characters: {
        title: 'Personajes',
        class_name: 'section_characters',
        items: @characters,
        path: '/characters/',
        linked_items_path: characters_path(period_id: @period),
        linked_items_title: 'Más personajes'
      }, 
      admin: {
        admin_signed_in: admin_signed_in?, 
        path_title: 'Nuevo Personaje',
        path: new_character_path(period_id: @period)
      }
		}
 	end

 	def new
 		@period = Period.new
 		@props = {
 			title: {
        text: 'Nuevo Periodo Historico'
      }
 		}
 	end
	 
	def edit
		@period = Period.find(params[:id])
		@props = {
			title: {
        text: 'Editar periodo histórico'
      }
		}
	end

 	def create
 		@period = Period.new(period_params)

		if @period.save
			redirect_to root_path
		else
			render 'new'
		end
 	end

 	def update
	  @period = Period.find(params[:id])
	 
	  if @period.update(period_params)
	    redirect_to @period
	  else
	    render 'edit'
	  end
  	end

 	private 
	def period_params
		params.require(:period).permit(:title)
	end
end
