# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  email                  :string(255)      default(""), not null
#  encrypted_password     :string(255)      default(""), not null
#  reset_password_token   :string(255)
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :string(255)
#  last_sign_in_ip        :string(255)
#  fname                  :string(255)
#  lname                  :string(255)
#  created_at             :datetime
#  updated_at             :datetime
#  picture_url            :string(255)

class User < ActiveRecord::Base
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  
  has_many :project_memberships
  
  has_many :projects,
  :through => :project_memberships,
  :source => :project
  
  has_many :owned_projects,
  :class_name => "Project",
  :foreign_key => :owner_id,
  :primary_key => :id
  
  has_many :notes,
  :class_name => "Note",
  :foreign_key => :author_id,
  :primary_key => :id
  
  def name
    [self.fname,self.lname].join(" ")
  end
  
end
