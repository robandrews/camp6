window.Camp6.Collections.Projects = Backbone.Collection.extend({
  url: "/projects",
  model: Camp6.Models.Project
  // 
  // getOrFetch: function(id, callback){
  //   var project = Camp6.projects.get(id);
  //   if(!project){    
  //     project = new Camp6.Models.Project({id: id});
  //     project.collection = Camp6.projects
  //     project.fetch({
  //       success: function(project){
  //         Camp6.projects.add(project);
  //         callback(project);
  //       }
  //     })
  //   }else{
  //     callback(project);
  //   };
  // }
  
})


