window.Camp6.Collections.Todos = Backbone.Collection.extend({
  url: "/projects/:project_id/todo_lists/:id/",
  
  model: Camp6.Models.Todo
})