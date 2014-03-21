window.Camp6.Models.Project = Backbone.Model.extend({
  
  urlRoot: "/projects",
  
  notes: function(){
    if(!this._notes){
      this._notes = new Camp6.Collection.Notes([],{
        project: this
      })
    }
  },
  
  todo_lists: function () {
    if (!this._todo_lists) {
      this._todo_lists = new Camp6.Collections.TodoLists([], {
        project: this
      });
    }

    return this._todo_lists;
  },



  //need to work out the parse function to take the nested todo items but leae the todo list intact
  parse: function (jsonResp) {
    if (jsonResp.todo_lists) {
      this.todo_lists().set(jsonResp.todo_lists);
      jsonResp.todo_lists.forEach(function(todo_list){
        if(todo_list.todos){
          //test scope.
          todo_list.todos().set()
        }
      })
      if(jsonResp.todo_lists.todos){
        
      }
      delete jsonResp.todo_lists;
    }else if(jsonResp.notes){
      this.notes().set(jsonResp.notes);
      delete jsonResp.notes;
    }

    return jsonResp;
  }
  
})