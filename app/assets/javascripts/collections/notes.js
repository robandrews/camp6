window.Camp6.Collections.Notes = Backbone.Collection.extend({
  url: function(){
    return this.project.url() + "/notes"
  },
  
  initialize: function (models, options) {
    this.project = options.project;
  },
  
  model: Camp6.Models.Note

})