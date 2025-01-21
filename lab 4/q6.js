let p1=Promise.resolve(5)
 let p2=Promise.resolve(10)
 let p3=Promise.resolve(15)


let sum=0
 Promise.all([p1,p2,p3]).then((array)=>{
       for (let index = 0; index < array.length; index++) {
        const element = array[index];
        sum+=element
       }
 }).catch((err)=>{
    console.log(err)

 }).finally(()=>{

     console.log(sum)
 });
