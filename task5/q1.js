const os = require('os');
setInterval(()=>{


const freeMemoryInGB = os.freemem() ;

console.log(freeMemoryInGB);
},
5000);

