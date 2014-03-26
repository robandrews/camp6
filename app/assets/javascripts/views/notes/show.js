window.Camp6.Views.NoteShow = Backbone.CompositeView.extend({
  template: JST["notes/show"],
  
  initialize: function(){    
    var addComment = new Camp6.Views.CommentNew({
      note: this.model
    });   
    this.addSubview(".new-comment-field", addComment);
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