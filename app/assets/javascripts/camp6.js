window.Camp6 = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},  
  initialize: function() {
    //find the project we are on
    var pathname = window.location.pathname;
    var id = pathname.slice(-1);
    Camp6.project = new Camp6.Models.Project({id: id})
    //fetch it and pass it to the router
    Camp6.project.fetch({
      success: function(){
        
        new Camp6.Routers.AppRouter({
          project: Camp6.project
        });
        
        Backbone.history.start();  
        
      }      
    })  
  }
};

