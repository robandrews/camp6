class AddPicToUsers < ActiveRecord::Migration
  def change
    add_column :users, :picture_url, :string
  end
end
