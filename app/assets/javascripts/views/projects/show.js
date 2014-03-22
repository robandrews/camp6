window.Camp6.Views.ProjectShow = Backbone.CompositeView.extend({
  template: JST['projects/show'],
  
  initialize: function(){

    var notesShowView = new Camp6.Views.NotesShow({
      collection: this.model.notes()
    });
    this.addSubview(".notes", notesShowView)
    
    
    //passing in all the todo_lists for a given project    
    var todoShowView = new Camp6.Views.TodoListShow({
      collection: this.model.todo_lists()
    })
    this.addSubview(".todos", todoShowView);
    
  },

  render: function(){
    var renderedContent = this.template({
      project: this.model
    });
    
    this.$el.html(renderedContent); 

    this.renderSubviews();
    return this;
  }
})