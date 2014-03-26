window.Camp6.Views.TodoEdit = Backbone.View.extend({
  template: JST["todo/edit"],
  
  render: function(){
    var renderedContent = this.template({
      todo: this.model
    });
    
    this.$el.html(renderedContent);
    
    return this;
  }
})