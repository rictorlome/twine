import { Identifier, Position, Char } from './logoot_util.js'

export class Message {
  constructor(type,char) {
    this.type = type
    this.char = char
  }
}
