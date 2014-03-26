todos = @todos

todos ||= nil
unless todos.nil?
  json.(todos) do |todo|
    json.partial!("todos/cal", :todo => todo)
  end
end