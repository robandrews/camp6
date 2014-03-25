window.Camp6.Views.TodoListShow = Backbone.CompositeView.extend({
  template: JST["todos/show"],
  
  render: function(){
    var renderedContent = this.template({
      todo_list: this.model
    });
    
    this.$el.html(renderedContent);
    
    return this;
  }
})