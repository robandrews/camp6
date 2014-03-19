# == Schema Information
#
# Table name: projects
#
#  id         :integer          not null, primary key
#  owner_id   :integer
#  title      :string(255)
#  created_at :datetime
#  updated_at :datetime
#

class Project < ActiveRecord::Base
  belongs_to :owner,
  :class_name => "User",
  :foreign_key => :owner_id,
  :primary_key => :id
end
