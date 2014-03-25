window.Camp6.Routers.AppRouter = Backbone.Router.extend({
  routes:{
    "":"showProject",
    "/projects/notes/:id":"notesShow",
    "calendar":"showCalendar",
    "todo-lists/:id":"todoListShow",
    "notes/new":"noteNew",
    "notes/:id":"noteShow"
    
  },
  
  initialize: function(options){
    this.project = options.project;
    this.project_url = this.project.url();
    this.notes_url = this.project_url + "/notes/:id";
  },
  
  showProject: function(){
    var projectShowView = new Camp6.Views.ProjectShow({
      model: this.project
    });
             
    $(".content").html(projectShowView.render().$el);
  },
  
  showCalendar: function(options){
    var calendarShowView = new Camp6.Views.CalendarShow({
      model: this.project
    });
    
    $(".content").html(calendarShowView.render().$el);
  },
  
  todoListShow: function(id){
    var todo_list = this.project.todo_lists().get(id);
    var todoListView = new Camp6.Views.TodoListShow({
      model: todo_list
    });
    
    $(".content").html(todoListView.render().$el);
  },
  
  noteShow: function(id){
    var note = this.project.notes().get(id);
    var noteView = new Camp6.Views.NoteShow({
      model: note
    });
    $(".content").html(noteView.render().$el);
  },
  
  noteNew: function(){
    var addNoteView = new Camp6.Views.NoteNew({
      project: this.project
    });
    $(".content").html(addNoteView.render().$el)
  }  
})