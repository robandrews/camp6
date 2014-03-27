window.Camp6.Views.NewCollaborators = Backbone.View.extend({
  template: JST["collaborators/new"],
  initialize: function(){
    this.users = [];
    this.setUsers();
  },
  events:{
    "click button.add-new-collaborator":"addNewCollaborator"
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
    
    newCollab.save();
  },
  
  render: function(){
    var renderedContent = this.template({
      project: this.model,
      users: this.users
    });
    
    this.$el.html(renderedContent);  
    return this;
  }
})