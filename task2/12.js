function createProfile({name,email}){
    return {name,email};
}

const person={
    name:"barath",
    age:20,
    email:"barath@gmail.com",
    address:"HYderabad"
}
const updatePerson=createProfile(person);
console.log(updatePerson);
