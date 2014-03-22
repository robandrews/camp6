class TodosController < ApplicationController
  
  def show
    @todo = Todo.find(params[:ids])
    render :json => @todo
  end
  
  def index
    @todos = Todo.where(:todo_list_id => params[:todo_list_id])
    render :json => @todos
  end
  
  def update
    p params
    @todo = Todo.find(params[:id])
    @todo.update_attributes(todo_params)
    render :json => @todo
  end
  
  def todo_params
    params.require(:todo).permit(:id, :completed, :task, :due_date)
  end
  
end
