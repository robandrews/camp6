require "spec_helper"

describe User do
  
  it "requires an email" do
    user = User.new(fname: "Rob", lname: "Andrews", password:"password")
    expect(user).to_not be_valid
  end
  
  it "requires a password" do
    user = User.new(fname: "Rob", lname: "Andrews", email: "rob@gmail.com")
    expect(user).to_not be_valid
  end
  
  it "has a name" do
     user = User.create!(fname: "Rob", lname: "Andrews", email: "rob@gmail.com", password:"password")
     expect(user.name).to eq("Rob Andrews")
  end
end