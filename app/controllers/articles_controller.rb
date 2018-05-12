class ArticlesController < ApplicationController
	def index
		@period = Period.find(params[:period_id])
 		@articles = @period.articles
 		@props = {
 			title: "Articulos sobre #{@period.title}",
		  admin_signed_in: admin_signed_in?, 
		  path_title: 'Nuevo artículo', 
		  path: new_article_path(period_id: @period)
		}
	end

	def show
		@article = Article.find(params[:id])
		@props = {
 			title: @article.title,
		  admin_signed_in: admin_signed_in?, 
		  path_title: 'Editar', 
		  path: edit_article_path(@article)
		}		
	end

	def new
		@article = Article.new	
		@article.period = Period.find(params[:period_id])
	end

	def edit
  		@article = Article.find(params[:id])
	end

	def create
		@period = Period.find(article_params[:period_id])
		@article = @period.articles.create(article_params)

		if @article.save
			redirect_to @article
		else
			render 'new'
		end
	end

	def update
		@article = Article.find(params[:id])

		if @article.update(article_params)
			redirect_to @article
		else
			render 'edit'
		end
	end

	def destroy
		@article = Article.find(params[:id])
		@article.destroy

		redirect_to articles_path
	end

	private 
	def article_params
		params.require(:article).permit(:title, :text, :period_id)
	end
end
