window.Camp6.Collections.TodoListComments = Backbone.Collection.extend({
  url: function(){
    return this.todo_list.url() + "/comments"
  },
  
  initialize: function (models, options) {
    this.todo_list = options.todo_list;
  },
  
  model: Camp6.Models.TodoListComment

})