window.Camp6.Views.TodoCommentNew = Backbone.View.extend({
  template: JST["comments/new"],
  
  initialize: function(options){
    this.todo_list = options.todo_list
  },
  
  events:{
    "click button.submit-comment":"submit"
  },
  
  render: function(){
    debugger
    var renderedContent = this.template();
    this.$el.html(renderedContent);  
    return this;
  },
  
  submit:function(event){
    var commentable_id = this.todo_list.id;
    var commentable_type = "TodoList";
    var commenter_id = Camp6.current_user_id;
    var content = $(".comment-body").val();
    var comment = new Camp6.Models.NoteComment({
      commentable_id: commentable_id,
      commentable_type: commentable_type,
      commenter_id: commenter_id, 
      content: content
    });
    var that = this;
    comment.save({}, {
      success: function(comment){
        that.todo_list.comments().add(comment);
        $(".comment-body").val();
        that.todo_list.comments().trigger("sync");
      }
    });
  }
  
})