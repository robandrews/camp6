class ChangeColUsers < ActiveRecord::Migration
  def change
    change_column :users, :picture_url, :string, :default => "https://s3-us-west-1.amazonaws.com/camp6/img/avatar.40.gif"
  end
end
