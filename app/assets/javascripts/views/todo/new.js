window.Camp6.Views.TodoItemNew = Backbone.View.extend({
  template: JST["todo/new"],
  
  render: function(){
    var renderedContent = this.template();
    this.$el.html(renderedContent);  
    return this;
  },
  
  initialize: function(options){
    this.parent_lists = options.todo_lists;
    this.todo_list = options.todo_list;
  },
  
  events:{
    "click button.submit-create-todo":"handleAddingTodo",
    "click a.close-add-todo":"closeAddingForm"
  },
  
  closeAddingForm: function(event){
    event.preventDefault();
    $(".add-todo-form").remove();
  },
  
  handleAddingTodo: function(event){
    event.preventDefault();
    var title = $("#todo-title-input").val(); 
    var date = $("#todo-date-input").val();   
    var newTodo = new Camp6.Models.Todo({
         title: title,
         todo_list_id: this.todo_list.id,
         author_id: Camp6.current_user_id,
         completed: false,
         due_date: date
    });
    var view = this;
    newTodo.save({}, {
      success: function(todo){
        view.todo_list.todos().add(todo);
        $('#todo-name-input').val("");
        view.parent_lists.trigger("sync");
      }
    });
  }
})