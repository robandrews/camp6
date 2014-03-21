class AddColumnToTodos < ActiveRecord::Migration
  def change
    add_column :notes, :project_id, :integer
  end
end
