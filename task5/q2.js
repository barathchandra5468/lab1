const os = require('os');



const  uptime= os.uptime() ;
const days = Math.floor(uptime / (3600 * 24)); 
const hours = Math.floor((uptime % (3600 * 24)) / 3600);
const minutes = Math.floor((uptime % 3600) / 60);


console.log("days:",days)
console.log("hours:",hours);
console.log("min:",minutes);



