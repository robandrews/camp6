@comments.each do |comment|
  json.partial!("comments/comment", :comment => comment)
end