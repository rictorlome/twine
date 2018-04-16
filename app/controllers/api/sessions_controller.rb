class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by(params[:email])
    if @user && @user.valid_password?(params[:password])
      render :show, status: :created
    else
     head(:unauthorized)
    end
  end

  def destroy
  end
end
