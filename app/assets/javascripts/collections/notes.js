window.Camp6.Collections.Notes = Backbone.Collection.extend({
  url: "/projects/:id/notes",
  
  model: Camp6.Models.Note
})