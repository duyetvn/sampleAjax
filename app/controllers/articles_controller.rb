class ArticlesController < ApplicationController
  def index
    @articles = Article.where("title like ?", "%#{params[:title]}%")

    if request.xhr?
      respond_to do |format|
        format.json  { render json: @articles } 
      end
    end
  end
end
