import { Identifier, Position, Char } from './logoot_util.js'

export class Message {
  constructor(type,char) {
    this.type = type
    this.char = char
  };
  fire(Subscription) {
    if (this.type === "ADD") {
      Subscription.add(this);
    } else if (this.type === "REMOVE") {
      Subscription.remove(this);
    }
  };
}
