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
  
  def index
    project = Project.find(params[:project_id])
    @users = project.users
    render :json => @users
  end
  
  def show
    @user = User.find(params[:id]);
    render :json => @user
  end
end
