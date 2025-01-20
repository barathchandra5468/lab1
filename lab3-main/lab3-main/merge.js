function mergeSpread(...args){
    let result = new Array();
    let len = args.length;
    for(i = 0;i<len;i++){
        result = [...result, ...args[i]];
    }   
    return result;
}

console.log("Merged Array: ", mergeSpread([1,2], [3,4], [5,6]));
console.log("Merged Array: ", mergeSpread([10, 20], [30, 40]));

