class ProjectsController < ApplicationController  
  def index
    @projects = Project.all
    render :json => @projects
  end
  
  def show
    @project = Project.find(params[:id])
    @todo_lists = @project.todo_lists
    @notes = @project.notes
    render "projects/show"
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
