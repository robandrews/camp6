class DropColumnFromNotes < ActiveRecord::Migration
  def change
    remove_column :notes, :title
  end
end
