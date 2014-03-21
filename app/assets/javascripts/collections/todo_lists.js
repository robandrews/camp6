window.Camp6.Collections.TodoLists = Backbone.Collection.extend({
  url: "/projects/:id/todo_lists",
  
  model: Camp6.Models.TodoList
})