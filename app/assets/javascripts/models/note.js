window.Camp6.Models.Note = Backbone.Model.extend({
  urlRoot: "/projects/:project_id/notes",
  
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