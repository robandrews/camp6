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
    @todo = Todo.find(params[:id])
    @todo.update_attributes(todo_params)
    render :json => @todo
  end
  
  def create
    @todo = Todo.new(todo_params)

    if @todo.save
      render :json => @todo
    else
      render :json => @todo.errors, :status => :unprocessable_entity
    end
  end
  
  private
  def todo_params
    params.require(:todo).permit(:id, :completed, :title, :due_date, :todo_list_id, :assignee_id, :author_id)
  end  
end
