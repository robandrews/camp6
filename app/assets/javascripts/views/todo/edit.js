window.Camp6.Views.TodoEdit = Backbone.View.extend({
  template: JST["todo/edit"],
  
  events:{
    "click button.submit-edit-todo":"submitEdit",
    "click a.close-edit-todo":"closeEditForm",
    "click button.delete-todo":"delete"
  },
  
  initialize: function(options){
    this.todo_list = options.todo_list;
    this.todo_lists = options.todo_lists;
  },
  
  render: function(){
    var renderedContent = this.template({
      todo: this.model
    });
    
    this.$el.html(renderedContent);
    
    return this;
  },
  
  closeEditForm: function(event){
    event.preventDefault();
    $(".edit-todo-form").remove();
    this.todo_lists.trigger("sync")
  },
  
  submitEdit: function(event){
    event.preventDefault();
    var title = $("#edit-todo-title-input").val(); 
    var date = $("#edit-todo-date-input").val();   
    var newTodo = new Camp6.Models.Todo({
         id: this.model.id,
         title: title,
         todo_list_id: this.todo_list.id,
         author_id: Camp6.current_user_id,
         completed: false,
         due_date: date
    });
    var view = this;
    newTodo.save({}, {
      success: function(todo){
        view.todo_list.todos().remove(view.model.id)
        view.todo_list.todos().add(todo);
        view.todo_lists.trigger("sync");
      }
    });
  },

  delete:function(event){
    event.preventDefault();
    this.todo_list.todos().remove(this.model.id);
    this.model.destroy();
    this.todo_lists.trigger("sync");
  }
  
})