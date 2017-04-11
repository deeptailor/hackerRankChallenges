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
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);

    if(a.length === 1){
        console.log(a[0]);
        return;
    }

    var aSorted = a.sort((a,b) => a-b);

    for(var i = 0; i < aSorted.length; i+=2){
        if(aSorted[i] !== aSorted[i+1]){
            console.log(aSorted[i]);
            return;
        }
    }

}
