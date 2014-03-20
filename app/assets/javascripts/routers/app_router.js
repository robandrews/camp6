window.Camp6.Routers.AppRouter = Backbone.Router.extend({
  routes:{
    "projects/:id":"projectShow"
  },
  
  projectShow: function(id){
    debugger

    alert("made it to projectShow")
    Camp6.projects.getOrFetch(id, function(project){
    
      var projectShowView = new Camp6.Views.ProjectShow({
        model: project
      })
    
      $("body").append(projectShowView.render().$el)
    })
  }
})