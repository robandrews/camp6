window.Camp6.Routers.AppRouter = Backbone.Router.extend({
  routes:{
    "":"projectShow"
  },
  
  initialize: function(options){
    this.project = options.project
  },
  
  projectShow: function(){
        
    var projectShowView = new Camp6.Views.ProjectShow({
      model: this.project
    });
    
    $("body").append(projectShowView.render().$el);
  },
  
  
  
})