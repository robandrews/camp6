# == Schema Information
#
# Table name: comments
#
#  id               :integer          not null, primary key
#  content          :text
#  commentable_id   :integer
#  commentable_type :string(255)
#  commenter_id     :integer
#  created_at       :datetime
#  updated_at       :datetime
#

class Comment < ActiveRecord::Base
  belongs_to :commentable, :polymorphic => true
  
  validates :commentable_id, :commentable_type, :commenter_id, :content, :presence => true
end
