function fetchData(url){

    let p=new Promise((resolve,reject)=>{
        if(url.includes('error')){
            reject("failed");
        }else{
            resolve("data fetched successfully");
        }
    });
return p;
}
let res=fetchData("https://localhost:/3000/login/")
 
console.log(res)

res.catch((val)=>{
    console.log("error");
})