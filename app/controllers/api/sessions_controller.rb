class Api::SessionsController < ApplicationController

  before_action :require_logged_in, only: [:destroy]

  def destroy
    logout
    render json: {}
  end
end
