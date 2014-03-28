class StaticPagesController < ApplicationController
  before_filter :authenticate_user!
  def index
  end
  
  def splash
  end
end
