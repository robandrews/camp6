class TodosController < ApplicationController
  
  def show
    @todo = Todo.find(params[:ids])
    render :json => @todo
  end
  
  def index
    @todos = Todo.where(:todo_list_id => params[:todo_list_id])
    render :json => @todos
  end
  
end
