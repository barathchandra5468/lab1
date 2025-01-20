function  createProfile(object){
    let obj = {};
    let {name, email} = object;
    obj.name = name;
    obj.email = email;
    return obj;
}

let obj = {name: 'John', age: 20, email: 'john@example.com'};
console.log(createProfile(obj))