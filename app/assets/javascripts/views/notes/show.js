window.Camp6.Views.NoteShow = Backbone.View.extend({
  template: JST["notes/show"],
  
  render: function(){
    var renderedContent = this.template({
      note: this.model
    });
    
    this.$el.html(renderedContent);
    
    return this;
  }
})