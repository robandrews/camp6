window.Camp6.Models.Project = Backbone.Model.extend({
  
  urlRoot: "/projects",
  
  todos: function(){},
  
  notes: function(){}
  
  
  //need to make collections for all of these nested data
  todo_lists: function () {
    if (!this._todo_lists) {
      this._todo_lists = new Todo.Collections.TodoLists([], {
        project: this
      });
    }

    return this._comments;
  },

  parse: function (jsonResp) {
    if (jsonResp.comments) {
      this.todo_lists().set(jsonResp.todo_lists);
      delete jsonResp.todo_lists;
    }else if(jsonResp.notes){
      this.notes().set(jsonResp.notes);
      delete jsonResp.notes;
    }

    return jsonResp;
  }
})