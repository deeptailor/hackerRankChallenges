function main() {
    var n = parseInt(readLine());
    var s = readLine();
    var k = parseInt(readLine());


    var lowCase = "abcdefghijklmnopqrstuvwxyz";
    var upCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = '';

    for(let i = 0; i < s.length; i++){
        let cur = s[i];
        let lowIndex = lowCase.indexOf(cur);
        let upIndex = upCase.indexOf(cur);

        if(lowIndex !== -1){
            result += lowCase[(lowIndex + k)%26];
        } else if (upIndex !== -1){
            result += upCase[(upIndex + k)%26];
        } else {
            result += cur;
        }
    }

    console.log(result);
}
