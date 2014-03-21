window.Camp6.Collections.Todos = Backbone.Collection.extend({
  url: function(){
    return "/projects/" + this.project.get("id") + "/todo_lists/" + this.todo_list.get("id") + "/todos";
  },
  
  model: Camp6.Models.Todo,  
  
  initialize: function (models, options) {
    this.todo_list = options.todo_list;
    this.project_id = options.project_id
  }
  
})