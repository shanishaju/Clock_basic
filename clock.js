function getTime(){
    const time= new Date()
    console.log(time);

    const hour= new getHours()  
    console.log(hour);

    const min= new getMinutes()  
    console.log(min);    

    const sec= new getSeconds()  
    console.log(sec);

    
    result.innerHTML = `${hour}:${min}:${sec}> ${hour>=12?'PM':'AM'} `

 setTimeout(()=>{
    getTime()
 },1000)

}

getTime()

