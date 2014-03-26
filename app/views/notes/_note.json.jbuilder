json.(note, :id, :project_id, :author_id, :body, :created_at, :updated_at)

comments ||= nil
unless comments.nil?
  json.(comments) do |comment|
    json.partial!("comments/comment")
  end
end