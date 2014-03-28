window.Camp6.Views.NoteCommentNew = Backbone.View.extend({
  template: JST["comments/new"],
  
  initialize: function(options){
    this.note = options.note
  },
  
  events:{
    "click button.submit-comment":"submit"
  },
  
  render: function(){
    
    var renderedContent = this.template({
      
    });
    this.$el.html(renderedContent);  
    return this;
  },
  
  submit:function(event){
    var commentable_id = this.note.id;
    var commentable_type = "Note";
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
        that.note.comments().add(comment);
        $(".comment-body").val();
        that.note.comments().trigger("sync");
      }
    });
  }
  
})
