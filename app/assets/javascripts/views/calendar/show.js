window.Camp6.Views.CalendarShow = Backbone.CompositeView.extend({
  template: JST["calendar/show"],
  
  // initialize: function(options){
  //   var calendarSidebar = new Camp6.Views.CalSidebar({
  //     todo_lists: this.model.todo_lists()
  //   });
  //   
  //   this.addSubview(".calendar-sidebar", calendarSidebar)
  // },
  
  render: function(){
    var renderedContent = this.template({
      project: this.model
    });
    
    this.$el.html(renderedContent);
    this.renderSubviews;
    return this;
  }
})