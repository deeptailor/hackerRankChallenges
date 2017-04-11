process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    magazine = readLine().split(' ');
    ransom = readLine().split(' ');

    if(m < n){
        console.log('No');
        return;
    }

    function wordCount(array){
        var wordCountHash = {};

        array.forEach(word => {
           if(wordCountHash[word]){
               wordCountHash[word] += 1;
           } else {
               wordCountHash[word] = 1;
           }
        });
        return wordCountHash;
    }

    var magazineWordCountHash = wordCount(magazine);
    var ransomWordCountHash = wordCount(ransom);

    for(var i = 0; i < ransom.length; i++){
      let word = ransom[i];

      if(magazineWordCountHash[word] < ransomWordCountHash[word]){
        console.log('No');
        return;
      }
    }

    console.log('Yes');
}
