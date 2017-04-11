function processData(input) {
    class Queue{
        constructor(){
          this.stack1 = [];
          this.stack2 = [];
        }

        enqueue(num){
            this.stack1.push(num);
        }

        dequeue(){
            if(this.stack1.length === 0){
                return false;
            }

            while(this.stack1.length){
                this.stack2.push(this.stack1.pop());
            }

            this.stack2.pop();

            while(this.stack2.length){
                this.stack1.push(this.stack2.pop());
            }
        }

        print(){
           console.log(this.stack1[0]);
        }
    }

    var newQueue = new Queue();
    var inputArray = input.split("\n");
    var numItems = inputArray[0];
    var finalArray = [];

    inputArray.forEach(string => {
        if(string.includes(" ")){
            string = string.split(' ');
            finalArray.push(string);
        } else {
            finalArray.push([string]);
        }
    });

    finalArray.forEach(array => {
       if(array[0] === "1"){
           newQueue.enqueue(array[1]);
       } else if(array[0] === "2"){
           newQueue.dequeue();
       } else if(array[0] === "3"){
           newQueue.print();
       }
    });

}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
