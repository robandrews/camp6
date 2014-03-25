window.Camp6.Views.NotesIndex = Backbone.View.extend({
  template: JST["notes/index"],
  
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