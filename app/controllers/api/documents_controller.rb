class Api::DocumentsController < ApplicationController
  def create
    @document = Document.new
    if @document.save
      render :show
    else
      render json: {errors: @document.errors.full_messages}, status: 422
    end
  end

end
