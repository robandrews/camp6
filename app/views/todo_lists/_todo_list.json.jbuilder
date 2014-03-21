json.(todo_list, :id, :project_id, :title, :created_at, :updated_at)

todos ||= nil
unless todos.nil?
  json.todos(todos) do |todo|
    json.partial!("todos/todo", :todo => todo)
  end
end