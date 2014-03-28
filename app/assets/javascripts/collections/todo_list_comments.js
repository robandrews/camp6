window.Camp6.Collections.TodoListComments = Backbone.Collection.extend({
  url: function(){
    return "/projects/" + Camp6.project.id+ "/todo_lists/" + this.todo_list.id + "/comments"
  },
  
  initialize: function (models, options) {

    this.todo_list = options.todo_list;
  },
  
  model: Camp6.Models.TodoListComment

})