window.Camp6.Views.CommentsIndex = Backbone.CompositeView.extend({
  template: JST["comments/index"],
  
  initialize: function(options){
    this.project_url = options.project_url;
    this.comments = options.comments;
    
    var commentsShowView = new Camp6.Views.CommentsShow({
      collection: this.comments
    });
    this.addSubview(".comment-list", commentsShowView);
  },
  
  render: function(){
    var renderedContent = this.template({
      comments: this.comments
    });
        
    this.$el.html(renderedContent);  

    this.renderSubviews();
    return this;
  }
  
})
