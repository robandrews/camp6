window.Camp6.Views.NotesShow = Backbone.View.extend({
  template: JST["notes/show"],
  
  render: function(){
    var renderedContent = this.template({
      notes: this.collection
    });
    
    this.$el.html(renderedContent);
    
    return this;
  },
  
  destroy: function(){
    this.model.destroy();
  }
})