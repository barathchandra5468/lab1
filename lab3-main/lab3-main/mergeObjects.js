function mergeObjects(...args){
    let obj;
    for(let i = 0;i<args.length;i++){
        obj = {...obj, ...args[i]};
    }
    return obj;
}

const userDetails = {name: "CVR", age: 25};
const userAddress = {address: "Mangalpally", city: "Hyderabad"};
const userPreferences = {theme: "Engineering Edu", language: "EN"};

console.log(mergeObjects(userDetails, userAddress, userPreferences));


