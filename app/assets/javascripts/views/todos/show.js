window.Camp6.Views.TodoListShow = Backbone.CompositeView.extend({
  template: JST["todos/show"],
  
  initialize: function(options){
    this.comments = options.comments
    
    var addComment = new Camp6.Views.CommentNew({
      note: this.model
    });   
    this.addSubview(".new-comment-field", addComment);
   
    
    var allComments = new Camp6.Views.CommentsIndex({
      model: this.model,
      comments: this.comments
    });
    this.addSubview(".all-note-comments", allComments);
  },
  
  render: function(){
    var renderedContent = this.template({
      todo_list: this.model
    });
    
    this.$el.html(renderedContent);
    this.renderSubviews();
    return this;
  }
})