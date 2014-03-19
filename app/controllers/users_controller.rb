class UsersController < Devise::SessionsController
  
  def create
    super
  end
  
  def show
    @user = User.find(params[:id])
  end
end
