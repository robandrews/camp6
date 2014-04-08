require "spec_helper"


describe Project do
  subject(:project){Project.new}
  it "has project memberships" do
    expect(project).to respond_to(:project_memberships)
  end
  
  it "has todo lists" do
    expect(project).to respond_to(:todo_lists)
  end
  
  it "has notes" do
    expect(project).to respond_to(:notes)
  end
  
  it "can add users" do
    user = User.create!(fname: "Rob", lname: "Andrews", email:"rob@gmail.com", password:"password")
    project.users.build(user)
    expect(project.users.first).to eq(user)
  end
  
end