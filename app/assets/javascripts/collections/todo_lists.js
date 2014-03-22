window.Camp6.Collections.TodoLists = Backbone.Collection.extend({
  url: function(){
    return this.project.url() + "/todo_lists"
  },
  
  model: Camp6.Models.TodoList,
  
  initialize: function (models, options) {
    this.project = options.project;
  }
})