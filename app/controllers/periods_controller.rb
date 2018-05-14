class PeriodsController < ApplicationController
	def index
  		@periods = Period.all
 	end

 	def show
 		@period = Period.find(params[:id])
 		@articles = @period.articles.limit(5)
 		@characters = @period.characters.limit(2)
	 	@props = {
		 	title: @period.title,
			admin_signed_in: admin_signed_in?, 
			path_title: 'Editar', 
			path: edit_period_path(@period)
		}
 	end

 	def new
 		@period = Period.new
 		@props = {
 			title: 'Nuevo Periodo Historico'
 		}
 	end
	 
	def edit
		@period = Period.find(params[:id])
		@props = {
			title: 'Editar periodo histórico'
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
