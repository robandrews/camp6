window.Camp6.Collections.NoteComments = Backbone.Collection.extend({
  url: function(){
    return "/projects/" + Camp6.project.id + "/notes/" + this.note.id + "/comments"
  },
  
  initialize: function (models, options) {
    this.note = options.note;
  },
  
  model: Camp6.Models.NoteComment

})