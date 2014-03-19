class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  respond_to :html, :json
  before_filter :configure_devise_params, if: :devise_controller?
  
  def after_sign_out_path_for(resource_or_scope)
    new_user_session_url
  end
  
  def configure_devise_params
    devise_parameter_sanitizer.for(:sign_up) do |u|
      u.permit(:fname, :lname, :email, :password, :password_confirmation)
    end
  end
  
end
