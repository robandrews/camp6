# == Schema Information
#
# Table name: project_memberships
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  project_id :integer
#

class ProjectMembership < ActiveRecord::Base
  
  belongs_to :user
  
  belongs_to :project
  
end
