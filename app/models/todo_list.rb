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
  
  validates :title, :project_id, presence: true 
  
  belongs_to :project
  
  has_many :todos,
  :class_name => "Todo",
  :foreign_key => :todo_list_id,
  :primary_key => :id
  
end
