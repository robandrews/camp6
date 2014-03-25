# == Schema Information
#
# Table name: todos
#
#  id           :integer          not null, primary key
#  task         :string(255)
#  completed    :boolean
#  due_date     :datetime
#  todo_list_id :integer
#  author_id    :integer
#  created_at   :datetime
#  updated_at   :datetime
#  assignee_id  :integer
#

class Todo < ActiveRecord::Base
  
  validates :author_id, :todo_list_id, :title, :presence => true
  
  belongs_to :todo_list,
  :class_name => "TodoList",
  :foreign_key => :todo_list_id,
  :primary_key => :id
  
  belongs_to :users,
  :class_name => "User",
  :foreign_key => :author_id,
  :primary_key => :id
  
  
end
