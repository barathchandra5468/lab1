function fetchDataWithCallback(callback){
    let value=Math.round(Math.random()*10)
    if(value>5){
        const obj={
            name:"barath",
            age:"20",

        }
        callback(obj)
    }else{
        callback("failed")
    }
}
function result(obj){
        console.log(obj)
}
fetchDataWithCallback(result)
