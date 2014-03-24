window.Camp6.Routers.AppRouter = Backbone.Router.extend({
  routes:{
    "":"projectShow",
    "/projects/notes/:id":"notesShow",
    "calendar":"showCalendar",
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
             
    $(".content").html(projectShowView.render().$el);
  },
  
  noteShow: function(options){
    debugger
  },
  
  showCalendar: function(){
    var calendarShowView = new Camp6.Views.CalendarShow({
      model: this.project
    });
    
    $(".content").html(calendarShowView.render().$el)
  }
  
  
  
})