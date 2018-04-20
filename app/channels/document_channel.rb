class DocumentChannel < ApplicationCable::Channel
  def subscribed
    stream_from "document_channel_#{params['room']}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
  def add(data)
    m = data['message']
    d = data['document']
    NewMessageBroadcastJob.perform_later(m,d)
  end
end
