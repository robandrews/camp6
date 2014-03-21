class RenameColumnInTodos < ActiveRecord::Migration
  def change
    rename_column :todos, :project_id, :todo_list_id
  end
end
