window.Camp6 = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},  
  initialize: function(options) {
    var pathname = window.location.pathname;
    this.current_user_id = options.current_user
    //...this is going to fail for double digit projects...//
    //           ..figure out a regex..                    //
    var id = pathname.slice(-1);
    //====================================================//
    Camp6.project = new Camp6.Models.Project({id: id});
    //fetch it and pass it to the router
    
    Camp6.project.fetch({
      success: function(){
        
        new Camp6.Routers.AppRouter({
          project: Camp6.project
        });
        
        Backbone.history.start();  
        
      }      
    })
    Camp6.emails = new Array();
    
    Camp6.users.fetch({
      success: function(users){
        users.toJSON().forEach(function(user){
          Camp6.emails.push(user[0]);
        })
      }
    });
  }
};

