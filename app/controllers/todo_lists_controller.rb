class TodoListsController < ApplicationController
  
  def index
    @todo_lists = TodoList.all
    render :json => @todo_lists
  end
  
  def show
    @todo_list = TodoList.find(params[:id])
    render :json => @todo_list
  end
  
  def create
    @todo_list = TodoList.new(todo_list_params)
    if @todo_list.save
      render :json => @todo_list
    else
      render :json => @todo_list.errors, :status => :unprocessable_entity
    end
  end

  def calendar_todos
    current_proj = Project.find(params[:project_id])
    @todos = current_proj.todos
    render "todo_lists/cal"
  end

  private
  def todo_list_params
    params.require(:todo_list).permit(:title, :project_id)
  end  
end


