window.Camp6.Models.TodoList = Backbone.Model.extend({
  urlRoot: "/projects/:id/todo_lists",
  
  todos: function(){
    if(!this._todos){

      this._todos = new Camp6.Collections.Todos([],{
        todo_list: this,
        project_id: this.attributes.project_id
      });
    }
    debugger
    return this._todos
  }
  
  
})