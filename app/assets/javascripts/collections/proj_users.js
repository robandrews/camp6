window.Camp6.Collections.ProjUsers = Backbone.Collection.extend({
  url: function(){
   return "/projects/"+ Camp6.project.id + "/project_memberships";
  },
  
  model: Camp6.Models.ProjUser
})

Camp6.proj_users = new Camp6.Collections.ProjUsers();
