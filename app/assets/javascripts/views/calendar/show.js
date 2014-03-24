window.Camp6.Views.CalendarShow = Backbone.View.extend({
  template: JST["calendar/show"],
  
  render: function(){
    var renderedContent = this.template({
      project: this.model
    });
    
    this.$el.html(renderedContent);
    
    return this;
  }
})