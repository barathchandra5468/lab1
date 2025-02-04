const fs=require('fs')

fs.writeFile('./sample.txt',"the sample is printed",()=>{
    console.log("file is written")
})

const data=fs.readFile('./sample.txt','utf-8',(error,data)=>{
    if
    (error) console.log(error)
      else 
    console.log(data)
})