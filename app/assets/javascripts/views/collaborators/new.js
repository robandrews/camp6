window.Camp6.Views.NewCollaborators = Backbone.View.extend({
  template: JST["collaborators/new"],
  initialize: function(){
    this.users = [];
    this.setUsers();
    $('input').keyup(function(e){
     if(e.keyCode == 13){
        $(this).trigger('enter');
     }
    })
  },
  
  events:{
    "click button.add-new-collaborator":"addNewCollaborator",
    "enter":"addNewCollaborator"
  },
  
  setUsers: function(){
    var that = this;
    Camp6.users.toJSON().forEach(function(user){
      that.users.push(user[0]);
    });
  },
  
  addNewCollaborator: function(event){
    var email = $("#collab-email").val()
    var newCollab = new Camp6.Models.CollabEmail({
      email: email,
      project_id: this.model.id
    });
    var view = this;
    newCollab.save({},{
      success: function(newCollab){
        view.render();
      }
    });
  },
  
  render: function(){
    var view = this
    Camp6.proj_users.fetch({
      success: function(){
        var renderedContent = view.template({
          project: view.model,
          users: view.users,
          proj_users: Camp6.proj_users
        });
    
        view.$el.html(renderedContent);  
        
      }
    })
    
    return this;
  }
})