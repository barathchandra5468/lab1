// function mul(num){
//     return num*2
// }
// function sub(num){
//       return num-3
// }
// function add(num){
//     return num+10
// }
// let p=new Promise((resolve,reject)=>
// {
//     resolve(10)
// }
// )
// p.then(mul).then(sub).then(add).then((value)=>{
//     console.log(value)
// }
// )

function mul(num,callback){
    callback(num*2);
}

function sub(num,callback){
   callback(num-3);
}

function add(num,callback){
   callback(num+10);
}

mul(27,(res)=>{
   sub(res,(sres)=>{
       add(sres,(ares)=>{
      console.log(ares) })
   })
})








// Create three functions that take a number, multiply it by 2, 
// subtract 3, and then add 10. Use callbacks to chain these operations together.