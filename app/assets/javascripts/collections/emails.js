window.Camp6.Collections.CollabEmails = Backbone.Collection.extend({
  url: "/project_memberships/new",
  model: Camp6.Models.CollabEmail
})

Camp6.users = new Camp6.Collections.CollabEmails();