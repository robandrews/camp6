window.Camp6.Collections.Todos = Backbone.Collection.extend({
  url: function(){
    return this.todo_list.url() + "/todos"
  },
  
  model: Camp6.Models.Todo,  
  
  initialize: function (models, options) {
    this.todo_list = options.todo_list;
  }
  
})