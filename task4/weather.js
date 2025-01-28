async function getweather(){
    const response=fetch("https://api.openweathermap.org/data/2.5/forecast?q=london&appid=55607185c8e13b83be4468a0675bb033")
   const data=await response.json()

   const {list}=data
   const temperature=new Array()
   for(let i=0;i<list.lenght;i=i+80){
      const {main:{temp,temp_min,temp_max}}=list[i]
      temperature.push(temp)
   }
   console.log(temperature)

}