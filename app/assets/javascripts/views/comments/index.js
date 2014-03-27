window.Camp6.Views.CommentsIndex = Backbone.View.extend({
  template: JST["comments/index"],
  
  initialize: function(options){
    this.project_url = options.project_url;
    this.comments = options.comments;
  },
  
  render: function(){
    var renderedContent = this.template({
      comments: this.comments
    });
        
    this.$el.html(renderedContent);  

    return this;
  }
  
})
