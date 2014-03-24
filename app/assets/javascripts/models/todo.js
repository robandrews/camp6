window.Camp6.Models.Todo = Backbone.Model.extend({

  //need to mak the correct url 
  //google using dynamic identifiers with a backbone model
  //OR creating models with a backbone collection
  
  urlRoot: "/projects/:project_id/todo_lists/:todo_list_id/todos"
})