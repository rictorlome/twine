import { Char, CharString } from '../../util/logoot_util.js';
import { Message } from '../../util/message_util.js';

const INSERT_TEXT = 'insertText';
const INSERT_LINE_BREAK = 'insertLineBreak';

export const DocumentChangeHandler = (charString, e, doc) => {
  const subscription = App['document' + doc.id]
  var val;
  const cursorPosition = e.target.selectionStart - 1;
  switch(e.nativeEvent.inputType) {
    case INSERT_TEXT:
      val = e.nativeEvent.data;
      break;
    case INSERT_LINE_BREAK:
      val = "\n"
      break;
    default:
      console.log(`${e.nativeEvent.inputType} is not yet supported.`)
  };


  if (e.nativeEvent.inputType.slice(0,6) === "insert") {
    const char = new Char(charString, cursorPosition, 0, val, 0);
    const message = new Message("ADD", char);
    message.fire(subscription);
  }
}
