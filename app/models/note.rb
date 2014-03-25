# == Schema Information
#
# Table name: notes
#
#  id         :integer          not null, primary key
#  body       :text
#  author_id  :integer
#  created_at :datetime
#  updated_at :datetime
#  project_id :integer
#

class Note < ActiveRecord::Base
  
  belongs_to :project

  belongs_to :author,
  :class_name => "User",
  :foreign_key => :author_id,
  :primary_key => :id
end
