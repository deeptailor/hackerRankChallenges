function stringCompression(string){
  var result = '';

  var firstPointer = 0;
  
  while(firstPointer < string.length){
    let secondPointer = firstPointer + 1;
    let counter = 1;

    while(string[firstPointer] === string[secondPointer]){
        secondPointer++;
        counter++;
    }

    result += string[firstPointer];

    if(counter !== 1){
      result += counter;
    }

    firstPointer = secondPointer;
  }

  return result;
}

console.log(stringCompression('deep'));
