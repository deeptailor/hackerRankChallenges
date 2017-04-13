function twoLetterCombinations(string){
    function uniqueLetters(string){
        let object = {};

        for(let i = 0; i < string.length; i++){
            if(object[string[i]] === undefined){
                object[string[i]] = true;
            }
        }

        return Object.keys(object);
    }

    var unique = uniqueLetters(string);
    var results = [];

    for(let i = 0; i < unique.length; i++){
        var firstLetter = unique[i];
        for(let j = i+1; j < unique.length; j++){
            var secondLetter = unique[j];
            var combination = [firstLetter, secondLetter];
            results.push(combination);
        }
    }
    return results;
}

function combinationStrings(string){
    var combinations = twoLetterCombinations(string);
    var resultStrings = [];

    combinations.forEach(comb => {
       var s = '';
       for(let i = 0; i < string.length; i++){
           if(string[i] === comb[0] || string[i] === comb[1]){
               s += string[i];
           }
       }
       resultStrings.push(s);
    });

    return resultStrings;
}

function isAlternating(string){
    for(let i = 0; i < string.length-1; i++){
        if(string[i] === string[i+1]){
            return false;
        }
    }

    return true;
}


function maxLen(n, s){
    var temp = [];
    var strings = combinationStrings(s);
    var maxLength = 0;

    strings.forEach(string => {
       if(isAlternating(string)){
           maxLength = maxLength < string.length ? string.length : maxLength;
       }
    });

    return maxLength;
}

function main() {
    var n = parseInt(readLine());
    var s = readLine();
    var result = maxLen(n, s);
    process.stdout.write(""+result+"\n");

}
