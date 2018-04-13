store newStack = []
suppose the two numbers (etc) are EQUAL
  in this case:
    newStack.push(stack1[i]);
  move on to the next i;
suppose the two numbers (identifier digits at index i) are different
  in this case, increment the lower of the two digits
  IF incrementedDigit === identifier digit of stack2 at index i
    THEN move to the next i.
  OTHERWISE
    newStack.push(new Identifier(incrementedDigit, mySite))
Suppose we reach the Max i;

0 -> copy, continue
1 -> 0, 1
else -> 1

1 2 0 0 1 1

1 2 0 0 1

[], min = 3

1 2 3 2
1 2 3
1 2 3 3


    1 2
    1 2
    1 2 3 5 6

    1 2 0 0 1
    1 2 1
    1 2 3
