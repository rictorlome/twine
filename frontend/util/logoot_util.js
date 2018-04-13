class Position {
  const SIZE = 100;
  const MIN_POS = {stack: [new Identifier(0,0)]};
  const MAX_POS = {stack: [new Identifier(SIZE,0)]};

  constructor(pos1, pos2, mySite){
    pos1 = pos1 || MIN_POS
    pos2 = pos2 || MAX_POS
    this.stack = this.findPosBetween(pos1,pos2, mySite);
  }
  // 4 3 2 1
  // 4 3 2 1 0 0 1
  // 4 3 2 1 0 1

  findPosBetween(pos1, pos2, mySite){
    //returns an array of identifiers
    const stack1 = pos1.stack;
    const stack2 = pos2.stack;
    const newStack = [];
    const minLength = Math.min(stack1.length,stack2.length);
    for (let i = 0; i < minLength; i++) {
      if (stack1[i].compare(stack2[i]) === 0) {
        newStack.push(stack1[i]);
        continue;
      } else {
        const incremented = stack1[i].digit + 1;
        if (incremented === stack2[i].digit) {
          continue;
        } else {
          newStack.push(new Identifier(incremented, mySite))
        }
      }
    }
  }

  compare(other){
    for (let i = 0; i < Math.min(this.stack.length, other.stack.length); i++) {
      const comp = this.stack[i].compare(other.stack[i]);
      if (comp !== 0) return comp;
    }
    return Math.sign(this.stack.length - other.stack.length);
  }
}


class Identifier {
  constructor(digit, site) {
    this.digit = digit;
    this.site = site;
  }

  compare(other){
    if (this.digit < other.digit) {
      return -1;
    } else if (this.digit > other.digit) {
      return 1;
    } else {
      return Math.sign(this.site - other.site);
    }
  }
}

class Char {
  constructor(pos, lamport, value){
    this.pos = pos;
    this.lamport = lamport;
    this.value = value;
  }

}

class Version {
  constructor(){
    this.chars = []
  }
}
