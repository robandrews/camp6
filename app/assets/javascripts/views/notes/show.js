window.Camp6.Views.NoteShow = Backbone.CompositeView.extend({
  template: JST["notes/show"],
  
  initialize: function(options){    
    this.comments = options.comments    
    this.listenTo(this.model.comments(), "all", this.render)
    
    var addComment = new Camp6.Views.NoteCommentNew({
      note: this.model
    });   
    this.addSubview(".new-comment-field", addComment);
   
    
    var allComments = new Camp6.Views.CommentsShow({
      collection: this.comments
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