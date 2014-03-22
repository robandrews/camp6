window.Camp6.Views.TodoListShow = Backbone.CompositeView.extend({
  
  template: JST["todos/show"],
  
  intialize:{
    
  },
  
  events: {
    "click input.todo":"handleCheckedBox",
    "click #add-"
  },
  
  render: function(){
    var renderedContent = this.template({
      todos: this.collection
    });
    
    this.$el.html(renderedContent);
    
    return this;
  },
  
  handleCheckedBox: function(event){
    var check = $(event.target);
    var todo_id = check.data("id");
    var checked = check.prop("checked");
    var updateTodo = new Camp6.Models.Todo({id: todo_id, completed: checked});
    updateTodo.save();
  },
  
  
  
});