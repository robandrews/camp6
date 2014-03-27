window.Camp6.Routers.AppRouter = Backbone.Router.extend({
  routes:{
    "":"showProject",
    "/projects/notes/:id":"notesShow",
    "calendar":"showCalendar",
    "todo-lists/:id":"todoListShow",
    "notes/new":"noteNew",
    "notes/:id":"noteShow",
    "add-collaborators":"addCollaborators"
  },
  
  initialize: function(options){
    this.project = options.project;
    this.project_url = this.project.url();
    this.notes_url = this.project_url + "/notes/:id";
  },
  
  addCollaborators: function(){
    var addCollabs = new Camp6.Views.NewCollaborators({
      model: this.project
    });
    
    $(".content").html(addCollabs.render().$el);
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
    
    var comments = todo_list.comments([], {
      todo_list: todo_list
    });
    
    var that = this;
    
    comments.fetch({
      success:function(){
        var todoListView = new Camp6.Views.TodoListShow({
          model: todo_list,
          comments: comments
        });
        $(".content").html(todoListView.render().$el);
      }
    })
    
  },
  
  noteShow: function(id){
    var note = this.project.notes().get(id);
    
    var comments = note.comments([], {
      note: note
    });
    
    var that = this;
    
    comments.fetch({
      success: function(comments){
        var noteView = new Camp6.Views.NoteShow({
          model: note,
          comments: comments
        });
        $(".content").html(noteView.render().$el);
      }
    })
  },
  
  noteNew: function(){
    var addNoteView = new Camp6.Views.NoteNew({
      project: this.project
    });
    $(".content").html(addNoteView.render().$el)
  }  
})