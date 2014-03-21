class TodoListsController < ApplicationController
  
  def index
    @todo_lists = TodoList.all
    render :json => @todo_lists
  end
  
  def show
    @todo_list = TodoList.find(params[:id])
    render :json => @todo_list
  end
  
end
