window.Camp6.Views.TodoShow = Backbone.View.extend({
  template: JST["todos/show"],
  
  render: function(){
    var renderedContent = this.template({
      todos: this.collection
    });
    
    this.$el.html(renderedContent);
    
    return this;
  }
})