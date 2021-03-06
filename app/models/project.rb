# == Schema Information
#
# Table name: projects
#
#  id         :integer          not null, primary key
#  owner_id   :integer
#  title      :string(255)
#  created_at :datetime
#  updated_at :datetime
#  subtitle   :string(255)
#

class Project < ActiveRecord::Base
  
  has_many :project_memberships
  
  belongs_to :owner,
  :class_name => "User",
  :foreign_key => :owner_id,
  :primary_key => :id
  
  has_many :users,
  :through => :project_memberships,
  :source => :user

  has_many :todo_lists
  
  has_many :todos,
  :through => :todo_lists,
  :source => :todos
  
  has_many :notes
end
