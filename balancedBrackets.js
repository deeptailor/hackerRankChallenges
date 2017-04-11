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

var openBrackets = {"{":"}", "[":"]", "(":")"};
var closeBrackets = {"}":"{", "]":"[", ")":"("};
function bracketMatch(string){
    var stack = [];
    
    for(let i = 0; i < string.length; i++){
        if(openBrackets[string[i]]){
            stack.push(string[i]);
        } else {
            if(stack[stack.length-1] === closeBrackets[string[i]]){
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0 ? true : false;
}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var expression = readLine();
        if(bracketMatch(expression)){
            console.log("YES");
        } else if (!bracketMatch(expression)) {
            console.log("NO");
        }
    }

}
