async function getdata(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
         console.log(data)
         const allusers=document.getElementById("output")

     for(let i=0;i<data.length;i++){
        const listitem=document.createElement(`li`)
          var user=`Name:${data[i].name}
           email:${data[i].email} 
           id:${data[i].id}`
          listitem.textContent=user
          allusers.appendChild(listitem)


       
        
     }
    
}     
// getdata()  
