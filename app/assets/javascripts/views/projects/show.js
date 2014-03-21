window.Camp6.Views.ProjectShow = Backbone.CompositeView.extend({
  template: JST['projects/show'],
  
  render: function(){
    
    return this;
  },
  
  renderShell: function(){
    var renderedContent = this.template({project: this.model});
    this.$el.html(renderedContent); 
  }
})