window.Camp6.Collections.Notes = Backbone.Collection.extend({
  url: "/projects/:id/notes",
  
  initialize: function (models, options) {
    this.project = options.project;
  },
  
  model: Camp6.Models.Note

})