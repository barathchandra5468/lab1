const person = {name: 'Alice', address: {street: '123 Main St',
    city: 'Los Angeles', zip: '90001'}, age: 25};

let {address} = person;
let {street, city} = address;

console.log(street, city);