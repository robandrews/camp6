class ProjectMembershipsController < ApplicationController
  def new
    @potentials = User.all.map{|user| [user.email]}
    render :json => @potentials 
  end
  
  def create
    @membership = User.find_by_email(params[:email])
                     .project_memberships.build({:project_id => params[:project_id]})
    if @membership.save
      render :json => @membership
    else
      render :json => @membership.errors, :status => :unprocessable_entity
    end    
  end
  
  def show
    
  end
end
