class RenamColumnInTodos < ActiveRecord::Migration
  def change
    rename_column :todos, :task, :title
  end
end
