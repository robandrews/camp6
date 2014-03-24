window.Camp6.Routers.AppRouter = Backbone.Router.extend({
  routes:{
    "":"projectShow",
    "/projects/notes/:id":"notesShow",
    "/calendar":"showCalendar"
  },
  
  initialize: function(options){
    this.project = options.project;
    this.project_url = this.project.url();
    this.notes_url = this.project_url + "/notes/:id";
  },
  
  projectShow: function(){
    var projectShowView = new Camp6.Views.ProjectShow({
      model: this.project
    });
             
    $("body").append(projectShowView.render().$el);
  },
  
  noteShow: function(options){
    debugger
  },
  
  showCalendar: function(){
    debugger
  }
  
  
  
})