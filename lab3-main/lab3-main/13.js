const data = [{name: 'John', age: 30 }, { name: 'Jane', age: 25 }];

const [first] = data;
let {name, age} = first;

console.log(name, age);