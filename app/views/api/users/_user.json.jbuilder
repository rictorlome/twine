json.set! user.id do
  json.extract! user, :id, :name, :temp
end