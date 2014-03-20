window.Camp6 = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    Camp6.projects = new Camp6.Collections.Projects();
    Camp6.projects.fetch({
      success: function(){
        alert("projects fetched")
        new Camp6.Routers.AppRouter();
        Backbone.history.start();
      }
    });
  }
};

$(document).ready(function(){
  Camp6.initialize();
});
