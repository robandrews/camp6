class NotesController < ApplicationController
  
  def index
    @notes = Note.all
    render :json => @notes
  end
  
  def show
    @note = Note.find(params[:id])
    render :json => @note
  end
  
end
