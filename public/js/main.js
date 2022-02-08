const submitbtn=document.getElementById('submitbtn')

const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name')
const temp=document.getElementById('temp');
const temp_status=document.getElementById('temp_status')



const getInfo=async(event)=>{
    event.preventDefault();
   let cityVal=cityName.value;
   

   if(cityVal===""){
       city_name.innerText=`PLZ WRITE THE NAME BEFORE SEARCH`

   }else{
       try{
           console.log(cityVal);
         
    const url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=49eb4b87485437077d95fb27ab1b40f6`
    console.log(url);
    const response=await fetch(url);
    console.log(response);

    const data=await response.json();
    console.log(data);
    const arrData=[data];
    console.log(arrData);
    city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
    temp.innerText=arrData[0].main.temp;
    console.log( temp.innerText=arrData[0].main.temp);
    temp_status.innerText=arrData[0].weather[0].main;
    
       }catch{
           city_name.innerText=`plz enter the city name properly`
       }



   }

}

submitbtn.addEventListener('click',getInfo)