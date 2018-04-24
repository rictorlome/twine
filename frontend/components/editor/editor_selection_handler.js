import { Message } from '../../util/message_util.js';

export const EditorSelectionHandler = (range,oldRange,source,currentUser,doc) => {
  const subscription = App['document' + doc.id]
  const message = new Message("SELECT",null,currentUser,range);
  message.fire(subscription);
}
