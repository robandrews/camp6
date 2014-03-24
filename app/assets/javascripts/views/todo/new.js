window.Camp6.Views.TodoItemNew = Backbone.View.extend({
  template: JST["todo/new"],
  
  render: function(){
    var renderedContent = this.template();
    this.$el.html(renderedContent);  
    return this;
  },
  
  initialize: function(options){
    this.todo_list = options.todo_list
  },
  
  events:{
    "click button.submit-create-todo":"handleAddingTodo"
  },
  
  handleAddingTodo: function(event){
    
    var task = $("#todo-name-input").val();     
    var newTodo = new Camp6.Models.Todo({
      
    //due date and assignee id as an optional extension later
         task: task,
         todo_list_id: this.todo_list.id,
         author_id: Camp6.current_user_id,
         completed: false
             
    });
    var view = this;
    newTodo.save({}, {
      success: function(todo){
        view.todo_list.todos().add(todo);
        $('#todo-name-input').val("");
      }
    });
  }
  
})