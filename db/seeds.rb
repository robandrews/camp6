# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


rob = User.create(fname: "Rob", lname: "Andrews", email: "rob@gmail.com", password: "password")
ryan = User.create(fname: "Ryan", lname: "O'Donnell", email: "ryan@gmail.com", password: "password",
  picture_url: "http://spinoff.comicbookresources.com/wp-content/uploads/2013/12/terminator.jpg")
User.create(fname: "Weyman", lname: "Fung", email: "weyman@gmail.com", password: "password")
User.create(fname: "Malcolm", lname: "Ahoy", email: "malcolm@gmail.com", password: "password")

proj = rob.projects.create(owner_id: 1, title: "Project 1", subtitle:"a cool project")
ryan.projects.concat(proj)

rob.projects.create(owner_id: 1, title: "Project 2", subtitle:"a sweet project")
ryan.projects.create(owner_id: 2, title: "Project 2", subtitle:"a rad project")

todo_list = proj.todo_lists.create({title: "Todo List #1"})
  
todo_list.todos.create({:completed => false, 
  :due_date => Time.now.advance(days: 2), :author_id => 1, :title => "Buy milk"})
  
todo_list.todos.create({:completed => false, 
  :due_date => Time.now.advance(days: 2), :author_id => 1, :title => "Buy eggs"})
  
todo_list.todos.create({:completed => true, 
    :due_date => Time.now.advance(days: 2), :author_id => 1, :title => "Buy cheese!"})
    
proj.notes.create({:project_id => 1, :author_id => 1, :body => "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})