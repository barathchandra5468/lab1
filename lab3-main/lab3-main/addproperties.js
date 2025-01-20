function addProperties(...args){
    let obj = {};
    obj = {...obj, id: args[0].id, name: args[0].name};
    obj.discount = 10;
    obj.inStock = true
    return obj;
}

const product = {id: 101, name: 'Laptop', price: 1000, category:'Electronics'}
console.log(addProperties(product));