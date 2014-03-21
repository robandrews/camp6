class TodosController < ApplicationController
  
  def index
    @todos = Todo.where(:project_id => params[:id])
  end
  
  def create
    
  end
  
  private
  def todo_params
    
  end
end
