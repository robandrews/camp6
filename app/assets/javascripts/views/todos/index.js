window.Camp6.Views.TodoListIndex = Backbone.View.extend({
  
  //lets try to make this todo list a composite view so we can re-render individual comments after editing
  
  template: JST["todos/index"],
  
  initialize: function(options){
    this.project = options.project;
    this.listenTo(this.project.todo_lists(), "add sync", this.render);
  },
  
  events: {
    "click input.todo":"handleCheckedBox",
    "click button.add-todo-list":"showAddList",
    "click button.add-single-todo":"showAddTodo",
    "click a.index-todo":"editTodo"
  },
  
  render: function(){
    var renderedContent = this.template({
      todos: this.project.todo_lists(),
      project: this.project
    });
    this.$el.html(renderedContent);    
    return this;
  },
  
  editTodo: function(event){
    var list = $(event.target).parent().data("list-id")
    var todo_id = $(event.target).parent().data("id")
    $(event.target).parent().html("")
    
    debugger

  },
  
  handleCheckedBox: function(event){
    var check = $(event.target);
    var todo_id = check.data("id");
    var checked = check.prop("checked");
    var updateTodo = new Camp6.Models.Todo({id: todo_id, completed: checked});
    var list = this.project.todo_lists().get($(event.target).parent().data("list-id")).collection
    updateTodo.save({},{
      success: function(todo){
        list.remove(todo_id);
        list.add(todo)
        list.trigger("sync")
      }
    });    
  },
  
  showAddList: function(event){
    var newTodoListView = new Camp6.Views.TodoListNew({
      project: this.project,
      collection: this.project.todo_lists()
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
  }
  
});