function updateEmployeeDetails(...args){
    args[0].role = args[1];
}

const employee = {
    name: 'John',
    age: 30,
    role: 'Engineer',
    location: 'New York'
}

console.log(employee);

updateEmployeeDetails(employee, 'Manager');

console.log(employee);

