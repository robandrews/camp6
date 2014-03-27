window.Camp6.Views.NoteShow = Backbone.CompositeView.extend({
  template: JST["notes/show"],
  
  initialize: function(options){    
    this.comments = options.comments    
    this.listenTo(this.model.comments(), "all", this.render)
    
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
      note: this.model
    });
    this.$el.html(renderedContent);
    this.renderSubviews();
    return this;
  }
})