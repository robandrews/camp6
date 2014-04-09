window.Camp6.Views.TodoListIndex = Backbone.View.extend({
  
  template: JST["todos/index"],
  
  initialize: function(options){
    this.project = options.project;
    this.listenTo(this.project.todo_lists(), "add sync", this.render);
  },
  
  events: {
    "click input.todo":"handleCheckedBox",
    "click a.add-todo-list":"showAddList",
    "click button.add-single-todo":"showAddTodo",
    "click a.index-todo":"showEditTodo"
  },
  
  render: function(){
    var renderedContent = this.template({
      todos: this.project.todo_lists(),
      project: this.project
    });
    this.$el.html(renderedContent);    
    return this;
  },
  
  handleCheckedBox: function(event){
    var check = $(event.target);
    var todo_id = check.data("id");
    var checked = check.prop("checked");
    var updateTodo = new Camp6.Models.Todo({id: todo_id, completed: checked});
    var list = this.project.todo_lists().get($(event.target).parent().data("list-id"));
    updateTodo.save({},{
      success: function(todo){
        list.todos().remove(todo_id);
        list.todos().add(todo)
      }
    }); 
  },
  
  showAddList: function(event){
    event.preventDefault();
    var newTodoListView = new Camp6.Views.TodoListNew({
      project: this.project,
      collection: this.project.todo_lists(),
      parentView: this
    });
    $(".add-todo").html(newTodoListView.render().$el)
  },
  
  showAddTodo: function(event){
    var listNum = $(event.target).data("id")
    var list = this.collection.get(listNum)
    var newTodoItemView = new Camp6.Views.TodoItemNew({
      todo_list: list,
      todo_lists: this.project.todo_lists()
    });

    $(event.target).parent().find(".new-todo-input")
        .html(newTodoItemView.render().$el);
  },
  
  showEditTodo: function(event){
    var listId = $(event.target).parent().data("list-id")
    var todoId = $(event.target).parent().data("id")
    var list = this.collection.get(listId)
    var todo = list.todos().get(todoId)
    var editView = new Camp6.Views.TodoEdit({
      model: todo,
      todo_list: list,
      todo_lists: this.project.todo_lists()
    });
    $(event.target).parent().html(editView.render().$el);
  }
  
});