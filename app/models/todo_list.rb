# == Schema Information
#
# Table name: todo_lists
#
#  id         :integer          not null, primary key
#  project_id :integer
#  title      :string(255)
#  created_at :datetime
#  updated_at :datetime
#

class TodoList < ActiveRecord::Base
  
  belongs_to :project
  
  has_many :todos
end
