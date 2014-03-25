window.Camp6.Views.NoteNew = Backbone.View.extend({
  template: JST["notes/new"],
  
  initialize: function(options){
    this.project = options.project;
  },
  
  events:{
    "click button.create-note":"handleCreatedNote"
  },
  
  render: function(){
    var renderedContent = this.template({
      project: this.project
    });
    
    this.$el.html(renderedContent);
    
    return this;
  },
  
  handleCreatedNote: function(){
    var body = $("#create-note-textarea").val();
    var proj_id = this.project.id;
    var user = Camp6.current_user_id;
    var view = this;
        
    var note = new Camp6.Models.Note({
      body: body,
      project_id: proj_id,
      author_id: user
    });
    debugger
    note.save({},{
      success: function(note){
        view.project.notes().add(note);
        Backbone.history.navigate("", { trigger: true });
      }
    })
    
  }
})