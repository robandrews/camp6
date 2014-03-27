window.Camp6.Views.CalendarShow = Backbone.CompositeView.extend({
  template: JST["calendar/show"],
  
  render: function(){
    var renderedContent = this.template({
      project: this.model
    });
    
    this.$el.html(renderedContent);
    this.renderSubviews;
    return this;
  }
})