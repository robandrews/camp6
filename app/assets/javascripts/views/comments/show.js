window.Camp6.Views.CommentsShow = Backbone.View.extend({
  template: JST["comments/show"],

  
  render: function(){
    var renderedContent = this.template({
      comments: this.collection
    });
        
    this.$el.html(renderedContent);  

    return this;
  }
  
})
