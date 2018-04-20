class NewMessageBroadcastJob < ApplicationJob
  queue_as :default

  def perform(m,d)
    # Do something later
    ActionCable.server.broadcast "document_channel_#{d}", message: m
  end

  private

  def render_message(message)
    ApplicationController.renderer.render(partial: 'api/messages/message', locals: {message: message})
  end
end
