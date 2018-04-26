import { Char, CharString } from '../../util/logoot_util.js';
import { Message } from '../../util/message_util.js';

export const EditorKeydownHandler = (charString, e, doc, cursorIdx, curUserInfo) => {
  const subscription = App['document' + doc.id];
  let char;
  let message;
  let val;
  if (e.key === 'Backspace') {
    if (cursorIdx === 0) return;
    char = charString[cursorIdx - 1];
    message = new Message("REMOVE", char, curUserInfo);
    message.fire(subscription)
  } else if (!e.ctrlKey && !e.altKey && !e.metaKey) {
    e.key === 'Enter' ? val = '\n' : val = e.key
    //Hack to prevent selection from staying at 1 on empty charstring.
    if (cursorIdx > charString.length) cursorIdx = charString.length;
    char = new Char(charString, cursorIdx, 0, val, 0);
    message = new Message("ADD", char, curUserInfo);
    message.fire(subscription);
  } else {
    console.log(`${e.key} not yet supported.`)
  }
}
