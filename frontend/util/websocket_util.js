import { receiveChar, removeChar } from '../actions/char_actions';
import { receiveSelection } from '../actions/selection_actions';

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
        case "REMOVE":
          dispatch(removeChar(data.message.char))
          break;
        case "SELECT":
          dispatch(receiveSelection(data.message.range,data.message.user))
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
    remove: function(message) {
      return this.perform('remove', {
        message: message,
        document: document.id
      })
    },
    select: function(message) {
      return this.perform('select', {
        message: message,
        document: document.id
      })
    },
  });
}
