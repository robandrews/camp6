class CommentsController < ApplicationController
  def index
    @commentable = find_commentable
    @comments = @commentable.comments
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
