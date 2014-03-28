window.Camp6.Collections.Todos = Backbone.Collection.extend({
  url: function(){
    return this.todo_list.url() + "/todos"
  },
  
  comparator: function(model){
    return model.get("due_date");
  },
  
  model: Camp6.Models.Todo,  
  
  initialize: function (models, options) {
    this.todo_list = options.todo_list;
  }
  
})