function median(array){
    let copy = array.slice();
    copy.sort((a,b) => a-b);
    var mid;

    if(copy.length % 2 === 0){
        mid = copy.length/2;
        return (copy[mid] + copy[mid-1])/2;
    } else {
        mid = Math.floor(copy.length/2);
        return copy[mid];
    }
}

console.log(median([4,1,3,2,0]));
