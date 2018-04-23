import { Char, CharString } from '../../util/logoot_util.js';
import { Message } from '../../util/message_util.js';

const INSERT_TEXT = 'insertText';
const INSERT_LINE_BREAK = 'insertLineBreak';
const DELETE_CONTENT_BACKWARD = 'deleteContentBackward';

//Delete below function when appropriate.
export const EditorChangeHandler = (charString, e, doc, cursorIdx) => {
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

  let char;
  let message;
  if (e.nativeEvent.inputType.slice(0,6) === "insert") {
    char = new Char(charString, cursorPosition, 0, val, 0);
    message = new Message("ADD", char);
    message.fire(subscription);
  } else if (e.nativeEvent.inputType.slice(0,6) == "delete") {
    char = charString[cursorPosition + 1];
    message = new Message("REMOVE", char);
    message.fire(subscription)
  }
}

export const QuillKeydownHandler = (charString, e, doc, cursorIdx) => {
  const subscription = App['document' + doc.id];
  let char;
  let message;
  let val;
  if (e.key === 'Backspace') {
    if (cursorIdx === 0) return;
    char = charString[cursorIdx - 1];
    message = new Message("REMOVE", char);
    message.fire(subscription)
  } else if (!e.ctrlKey && !e.altKey && !e.metaKey) {
    e.key === 'Enter' ? val = '\n' : val = e.key
    char = new Char(charString, cursorIdx, 0, val, 0);
    message = new Message("ADD", char);
    message.fire(subscription);
  } else {
    console.log(`${e.key} not yet supported.`)
  }
}
