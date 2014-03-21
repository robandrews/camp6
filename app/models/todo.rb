# == Schema Information
#
# Table name: todos
#
#  id          :integer          not null, primary key
#  task        :string(255)
#  completed   :boolean
#  due_date    :datetime
#  project_id  :integer
#  author_id   :integer
#  created_at  :datetime
#  updated_at  :datetime
#  assignee_id :integer
#

class Todo < ActiveRecord::Base
  
  belongs_to :todo_list
  
  belongs_to :users,
  :class_name => "User",
  :foreign_key => :author_id,
  :primary_key => :id
end
