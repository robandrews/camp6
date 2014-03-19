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
  
end
