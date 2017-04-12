function stringReduce(input) {
    var result = '';
    var pointer1 = 0;

    while(pointer1 < input.length){
        var pointer2 = pointer1 + 1;

        if(input[pointer1] === input[pointer2]){
            pointer1 += 2;
        } else {
            result += input[pointer1];
            pointer1++;
        }
    }

    result = result.length === 0 ? "Empty String" : result;

    return result;
}

function processData(input){
  var copy = stringReduce(input);

  while(input !== copy){
    input = copy;
    copy = stringReduce(copy);
  }

  return input;
}

console.log(processData('lrfkqyuqfjjfquyqkfrlkxyqvnrtyssytrnvqyxkfrzrmzlygffgylzmrzrfveulqfpdbhhbdpfqluevlqdqrrcrwddwrcrrqdql') === "Empty String");
