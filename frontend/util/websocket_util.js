import { receiveChar } from '../actions/char_actions';

export const createDocumentSubscription = (document, dispatch) => {
  App['document' + document.id]= App.cable.subscriptions.create({channel:'DocumentChannel', room: document.id}, {
    connected: () => {

    },
    disconnected: () => {

    },
    received: (data) => {
      switch(data.message.type) {
        case "ADD":
          dispatch(receiveChar(data.message.char))
          break;
        default:
          return;
      }
    },
    add: function(message) {
      return this.perform('add', {
        message: message,
        document: document.id
      })
    },
  });
}
