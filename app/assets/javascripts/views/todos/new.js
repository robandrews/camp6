window.Camp6.Views.TodoListNew = Backbone.View.extend({
  template: JST["todos/new"],
  
  initialize: function(options){
    this.project = options.project;
    this.parentView = options.parentView
  },
  
  events:{
    "click button.submit-new-todo-list":"handleAddedList",
    "click a.remove-field":"destroy"
  },
  
  handleAddedList: function(event){
    var title = $("#todo-list-name-input").val();
    
    var newList = new Camp6.Models.TodoList({
      todo_list: {title: title, 
      project_id: this.project.id}
    });
    var view = this;    
    newList.save({}, {
      success: function(list){ 
        view.collection.add(list);
        view.remove();
        view.parentView.render();
      }
    });

  },
  
  destroy: function(event){
    event.preventDefault();
    this.remove();
  },
  
  render: function(){
    var renderedContent = this.template();
    this.$el.html(renderedContent);  
    return this;
  }
})