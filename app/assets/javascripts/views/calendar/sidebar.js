window.Camp6.Views.CalendarSidebar = Backbone.CompositeView.extend({
  template: JST["calendar/sidebar"],
  
  render: function(){
    var renderedContent = this.template({
      //so we could pass in the todo lists into this, to allow user to select the todo list, but that still doesn't take care of switch the calendars.
    });
    
    this.$el.html(renderedContent);
    return this;
  }
})