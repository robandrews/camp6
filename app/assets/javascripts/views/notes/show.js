window.Camp6.Views.NoteShow = Backbone.CompositeView.extend({
  template: JST["notes/show"],
  
  initialize: function(options){    
    this.project_url = options.project_url;
    
    var addComment = new Camp6.Views.CommentNew({
      note: this.model
    });   
    this.addSubview(".new-comment-field", addComment);
    
    var allComments = new Camp6.Views.CommentsIndex({
      model: this.model,
      project_url: this.project_url
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