require "spec_helper"


describe Project do
  subject(:project){Project.create(owner_id: 1, title: "Project 1", subtitle:"a cool project")}
  subject(:user){User.create(fname: "Rob", lname: "Andrews", email: "rob@gmail.com", password: "password",
    picture_url: "https://pbs.twimg.com/profile_images/378800000785341088/f402f34cbbb39acdf06cdc4988196e55.jpeg")}  
  subject(:user2){User.create(fname: "Ryan", lname: "O'Donnell", email: "ryan@gmail.com", password: "password",
    picture_url: "http://spinoff.comicbookresources.com/wp-content/uploads/2013/12/terminator.jpg")}
    
  it "has project memberships" do
    expect(project).to respond_to(:project_memberships)
  end
  
  it "has todo lists" do
    expect(project).to respond_to(:todo_lists)
  end
  
  it "has notes" do
    expect(project).to respond_to(:notes)
  end
  
  it "belongs to users" do
    user.projects.create(owner_id: 1, title: "Project 1", subtitle:"a cool project")
    expect(user.projects).to_not be(nil)
  end
  
  it "can add other users" do
    user2.projects.concat(project)
    expect(user2.projects).to include(project)
  end
  
end