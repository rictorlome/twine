import { Identifier, Position, Char } from './logoot_util.js'

export class Message {
  constructor(type,char,user,range) {
    this.type = type
    this.char = char
    this.user = user
    this.range = range
  };
  fire(Subscription) {
    if (this.type === "ADD") {
      Subscription.add(this);
    } else if (this.type === "REMOVE") {
      Subscription.remove(this);
    } else if (this.type === "SELECT") {
      Subscription.select(this);
    } else if (this.type === "JOIN") {
      Subscription.join(this);
    }
  };
}
