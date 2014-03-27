window.Camp6.Models.TodoList = Backbone.Model.extend({
  urlRoot: "/projects/:id/todo_lists",
  
  todos: function(){
    if(!this._todos){
      this._todos = new Camp6.Collections.Todos([],{
        todo_list: this
      });
    }
    
    return this._todos
  },
  
  comments: function(){
    if(!this._comments){
      this._comments = new Camp6.Collections.NoteComments([],{
        note: this
      })
    }
    
    return this._comments
  },
  
  parse: function(jsonResp){
    if(jsonResp.comments){
      this.comments().set(jsonResp.comments)
      delete jsonResp.comments
    }
  }
  
})