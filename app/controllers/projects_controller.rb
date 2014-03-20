class ProjectsController < ApplicationController
  
  def index
    @projects = Project.all
    render :json => @projects
  end
  
  def show
    @project = Project.find(params[:id])
    render :json => @project
  end
  
  def create
    @project = current_user.projects.create(project_params)
    @project.owner_id = current_user.id
    
    if @project.save
      redirect_to @project
    else
      flash[:errors] = @project.errors.full_messages
    end
    
  end
  
  def project_params
    params.require(:project).permit(:title, :subtitle, :collaborators)
  end
end
