//NOTE: The following article was instrumental in understanding the basic logoot structure: http://digitalfreepen.com/2017/10/06/simple-real-time-collaborative-text-editor.html

export class Identifier {
  constructor(digit, site) {
    this.digit = digit;
    this.site = site;
  }
}

Identifier.compare = function(id1, id2) {
  if (id1.digit < id2.digit) {
    return -1;
  } else if (id1.digit > id2.digit) {
    return 1;
  } else {
    return Math.sign(id1.site - id2.site);
  }
}


export class Position {
  static get SIZE() {
    return 100;
  }
  static get MIN_POS() {
    return {stack: [new Identifier(0,0)]};
  }
  static get MAX_POS() {
    return {stack: [new Identifier(Position.SIZE,0)]}
  }

  constructor(pos1, pos2, mySite){
    pos1 = pos1 || Position.MIN_POS
    pos2 = pos2 || Position.MAX_POS
    this.stack = Position.findPosBetween(pos1,pos2, mySite);
  }
}

Position.compare = function(pos1, pos2) {
  for (let i = 0; i < Math.min(pos1.stack.length, pos2.stack.length); i++) {
    const comp = Identifier.compare(pos1.stack[i],pos2.stack[i]);
    if (comp !== 0) return comp;
  }
  return Math.sign(pos1.stack.length - pos2.stack.length);
};

Position.findPosBetween = function(pos1, pos2, mySite) {
  const comparison = Position.compare(pos1,pos2);
  if (comparison === 0) {
    debugger
    throw 'Positions are equal';
  }
  if (comparison !== -1) return Position.findPosBetween(pos2,pos1,mySite);
    //returns an array of identifiers
    const stack1 = pos1.stack;
    const stack2 = pos2.stack;
    const stack1_len = stack1.length;
    const stack2_len = stack2.length;
    const newStack = [];
    for (let i = 0; i < Math.max(stack1_len,stack2_len); i++) {
      const id_1 = stack1[i] || new Identifier(0,mySite);
      const id_2 = stack2[i] || new Identifier(Position.SIZE,mySite)
      if (Identifier.compare(id_1,id_2) === 0) {
        newStack.push(id_1);
        continue;
      } else {
        const delta = id_2.digit - id_1.digit
        if (delta > 1) {
          newStack.push(new Identifier(id_1.digit+1,mySite))
          return newStack;
        } else if (delta === 1) {
          newStack.push(id_1);
          if (stack1_len <= stack2_len) {
            newStack.push(new Identifier(1,mySite));
            return newStack;
          }
        }
      }
    }
  }

export class Char {
  constructor(chars, idx, lamport=0, value, site){
    this.pos = this.getPosAtIdx(chars,idx,site);
    this.lamport = lamport;
    this.value = value;
  }

  getPosAtIdx(chars,idx,site) {
    let pos1;
    let pos2;
    idx === 0 ? pos1 = Position.MIN_POS : pos1 = chars[idx-1].pos
    idx === chars.length ? pos2 = Position.MAX_POS : pos2 = chars[idx].pos
    return new Position(pos1,pos2,site);
  }
}

export class CharString {
  constructor() {
    this.string = [];
  }
  add(char) {
    this.string.push(char);
    this.sort();
  }
  sort() { this.string.sort(function(a,b) { return Position.compare(a.pos, b.pos); }); }
}
