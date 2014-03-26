window.Camp6.Views.CommentsIndex = Backbone.View.extend({
  template: JST["comments/index"],
  
  initialize: function(options){
    this.project_url = options.project_url;
  },
  
  render: function(){
    var view = this;
    var comments = this.model.comments([], {
      note: this.model
    });
    
    comments.fetch({
      success:function(){
        
        var renderedContent = view.template({
          commentable: view.model
        });
        
        view.$el.html(renderedContent);  
      }
    })

    return this;
  }
  
})
