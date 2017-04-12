// Part 1

function processData(input) {
    let inputArray = input.split("\n");

    let numsArray = inputArray[1].split(' ').map(string => Number(string));

    var last = numsArray[numsArray.length-1];
    var i = numsArray.length-2;

    while(last < numsArray[i]){
        numsArray[i+1] = numsArray[i];
        i--;
        console.log(numsArray.join(' '));
    }


    numsArray[i+1] = last;
    console.log(numsArray.join(' '));
}

// Part 2

var input = "406 157 415 318 472 46 252 187 364 481 450 90 390 35 452 74 196 312 142 160 143 220 483 392 443 488 79 234 68 150 356 496 69 88 177 12 288 120 222 270 441 422 103 321 65 316 448 331 117 183 184 128 323 141 467 31 172 48 95 359 239 209 398 99 440 171 86 233 293 162 121 61 317 52 54 273 30 226 421 64 204 444 418 275 263 108 10 149 497 20 97 136 139 200 266 238 493 22 17 39"
var input2 = "2 1 3 1 2";
var input3 = "1 1 2 2 3 3 5 5 7 7 9 9";

function insertionSort(input) {
    // var numArray = input.split('\n');
    var inputArray = input.split(' ').map(string => Number(string));
    var shifts = 0;

    for(var i = 1; i < inputArray.length; i++){

        var last = inputArray[i];
        var lastPoint = i - 1;

        while(lastPoint > -1 && inputArray[lastPoint] > last){
            inputArray[lastPoint + 1] = inputArray[lastPoint];
            lastPoint--;
            shifts++;
        }

        inputArray[lastPoint+1] = last
    }
    return shifts;
}

console.log(insertionSort(input));
console.log(insertionSort(input2));
console.log(insertionSort(input3));
