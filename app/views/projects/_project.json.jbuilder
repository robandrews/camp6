json.(project, :id, :owner_id, :title, :subtitle, :created_at, :updated_at)

todo_lists ||= nil
unless todo_lists.nil?
  json.todo_lists(todo_lists) do |todo_list|
    json.partial!("todo_lists/todo_list", :todo_list => todo_list, :todos => todo_list.todos)
  end
end

notes ||= nil
unless notes.nil?
  json.notes(notes) do |note|
    json.partial!("notes/note", :note => note)
  end
end