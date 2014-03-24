window.Camp6.Views.ProjectShow = Backbone.CompositeView.extend({
  template: JST['projects/show'],
  
  initialize: function(){

    var notesShowView = new Camp6.Views.NotesShow({
      collection: this.model.notes()
    });
    this.addSubview(".notes", notesShowView)
    
    var todoIndexView = new Camp6.Views.TodoListIndex({
      collection: this.model.todo_lists(),
      project: this.model
    })
    
    this.addSubview(".todos", todoIndexView);
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