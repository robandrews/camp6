class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :task
      t.boolean :completed
      t.datetime :due_date
      t.integer :project_id
      t.integer :author_id
      
      t.timestamps
    end
    add_index :todos, :author_id
    add_index :todos, :project_id
  end
end
