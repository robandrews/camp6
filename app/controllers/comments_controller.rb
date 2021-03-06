class CommentsController < ApplicationController

  def note_index
    target = Note.find(params[:note_id])
    @comments = target.comments
    render "comments/index"
  end

  def todo_list_index
    target = TodoList.find(params[:todo_list_id])
    @comments = target.comments
    render "comments/index"
  end
  
  def create
    commentable = params["commentable_type"].constantize
    target = commentable.find(params[:commentable_id])
    @comment = target.comments.build(comment_params)
    if @comment.save
      render :json => @comment
    else
      render :json => @comment.errors, :status => :unprocessable_entity
    end
  end
  
  private
  def comment_params
    params.require(:comment).permit(:content, :commentable_id, :commenter_id)
  end    

end