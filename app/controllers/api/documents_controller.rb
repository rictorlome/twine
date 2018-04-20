class Api::DocumentsController < ApplicationController
  def create
    @document = Document.new
    if @document.save
      render :show
    else
      render json: {errors: @document.errors.full_messages}, status: 422
    end
  end


  def pull
    ##what are params here?
    @document = Document.find_by(path: params[:path])
    if @document
      render :show
    else
      render json: {errors: 'No such document'}, status: 404
    end
  end
end
