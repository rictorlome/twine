import { Message } from '../../util/message_util.js';

export const EditorSelectionHandler = (range,oldRange,source,currentUser,doc) => {
  // Click outside editor gives null range.
  // Consider adding remove select message/action cycle.
  if (range === null) return;
  const subscription = App['document' + doc.id]
  const message = new Message("SELECT",null,currentUser,range);
  message.fire(subscription);
}
