window.Camp6.Models.Project = Backbone.Model.extend({
  
  urlRoot: "/projects",
  
  notes: function(){
    if(!this._notes){
      this._notes = new Camp6.Collections.Notes([],{
        project: this
      })
    }
    return this._notes
  },
  
  todo_lists: function () {
    if (!this._todo_lists) {
      this._todo_lists = new Camp6.Collections.TodoLists([], {
        project: this
      });
    }

    return this._todo_lists;
  },



  parse: function (jsonResp) {
    if (jsonResp.todo_lists) {
      var lists = jsonResp.todo_lists
      this.todo_lists().set(lists);
      
      // This code would be used to instantiate individual todo objects, not sure if needed at this juncture.
      var i = 0;
      this.todo_lists().forEach(function(todo_list){
        if(todo_list.todos){
          todo_list.todos().set(lists[i].todos);
          i += 1;
        }
      })
      delete jsonResp.todo_lists
    }
    
    if(jsonResp.notes){
      this.notes().set(jsonResp.notes);
      delete jsonResp.notes;
    }
    
    return jsonResp;
  }
  
})