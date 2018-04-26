import { receiveChar, removeChar } from '../actions/char_actions';
import { receiveSelection } from '../actions/selection_actions';
import { receiveUser } from '../actions/user_actions';

import { Message } from './message_util.js';

export const createDocumentSubscription = (document, dispatch, currentUser) => {
  App['document' + document.id]= App.cable.subscriptions.create({channel:'DocumentChannel', room: document.id}, {
    //This is for the benefit of the person already in the room. There is no
    //information yet about who was already in there.
    connected: () => {
      const message = new Message("JOIN", null, currentUser);
      const subscription = App['document' + document.id];
      message.fire(subscription);
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
        case "JOIN":
          dispatch(receiveUser(data.message.user))
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
    join: function(message) {
      return this.perform('join', {
        message: message,
        document: document.id
      })
    },
  });
}
