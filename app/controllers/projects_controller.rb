class ProjectsController < ApplicationController
  def show
    @project = Project.find(params[:id])
    
    #here we will render this to json...and get rid of the project show view, becuase this will all need to be in javascript.
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
