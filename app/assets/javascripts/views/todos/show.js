window.Camp6.Views.TodoListShow = Backbone.CompositeView.extend({
  template: JST["todos/show"],
  
  initialize: function(options){
    this.comments = options.comments;
    this.project = options.project;
    this.listenTo(this.model.comments(), "all", this.render);
    this.listenTo(this.model.todos(), "add", this.render);
    
    var addComment = new Camp6.Views.TodoCommentNew({
      todo_list: this.model
    });   
    this.addSubview(".new-comment-field", addComment);
   
    var allComments = new Camp6.Views.CommentsShow({
      collection: this.comments
    });
    this.addSubview(".all-note-comments", allComments);
  },
  
  events: {
    "click input.todo":"handleCheckedBox",
    "click button.add-single-todo":"showAddTodo",
    "click a.index-todo":"showEditTodo"
  },
  
  render: function(){
    var renderedContent = this.template({
      todo_list: this.model
    });
    
    this.$el.html(renderedContent);
    this.renderSubviews();
    return this;
  },
  
  handleCheckedBox: function(event){
    var check = $(event.target);
    var todo_id = check.data("id");
    var checked = check.prop("checked");
    var updateTodo = new Camp6.Models.Todo({id: todo_id, completed: checked});
    var list = this.model

    updateTodo.save({},{
      success: function(todo){
        list.todos().remove(todo_id);
        list.todos().add(todo)
      }
    }); 
  },
  
  showAddTodo: function(event){
    var listNum = $(event.target).data("id")
    var list = this.model;
    var newTodoItemView = new Camp6.Views.TodoItemNew({
      todo_list: list,
      todo_lists: this.project.todo_lists()
    });

    $(event.target).parent().find(".new-todo-input")
        .html(newTodoItemView.render().$el);
  },
  
  showEditTodo: function(event){
    var todoId = $(event.target).parent().find("input").data("id")
    var list = this.model
    var todo = list.todos().get(todoId)
    var editView = new Camp6.Views.TodoEdit({
      model: todo,
      todo_list: list,
      todo_lists: Camp6.project.todo_lists()
    });
    $(event.target).parent().html(editView.render().$el);
  }
})