# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


rob = User.create(fname: "Rob", lname: "Andrews", email: "rob@gmail.com", password: "password")
ryan = User.create(fname: "Ryan", lname: "O'Donnell", email: "ryan@gmail.com", password: "password")
User.create(fname: "Weyman", lname: "Fung", email: "weyman@gmail.com", password: "password")
User.create(fname: "Malcolm", lname: "X", email: "malcolm@gmail.com", password: "password")

proj = rob.projects.create(owner_id: 1, title: "Project 1", subtitle:"a cool project")
ryan.projects.concat(proj)

rob.projects.create(owner_id: 1, title: "Project 2", subtitle:"a sweet project")
ryan.projects.create(owner_id: 2, title: "Project 2", subtitle:"a rad project")
