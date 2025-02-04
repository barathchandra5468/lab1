const events=require(`events`);

let myemitter=new events.EventEmitter()

 myemitter.on('userdetails',(name,age)=>
{
    console.log( `Hello, ${name} You are ${age} years old.`)
}
)
myemitter.emit("userdetails",'barath',16)