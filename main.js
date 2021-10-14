
 let searchInput= document.getElementById('searchInput');
 let searchBtn=document.getElementById('searchBtn');
 let inputMail=document.getElementById('inputMail')
 let subbtn=document.getElementById('subbtn')
 let alertEmail=document.getElementById('alertEmail')
   let n,tomowwrow,aft//for day
   /////////////////////
let allData
(async function getdata(){
  let searchBtn=document.getElementById('searchBtn')
 let responce=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=58ee990ffdf940dd889190917211509&q=${searchInput.value='cairo'}&days=3`)
 if(responce.status!=200){
  alert("no matching country exist")
 }
 else{
   allData =await responce.json()
  
   
   await setdata()
 }
 
 
})();

async function getdata(){
  let searchBtn=document.getElementById('searchBtn')
 let responce=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=58ee990ffdf940dd889190917211509&q=${searchInput.value}&days=3`)
 if(responce.status!=200){
  alert("no matching country exist")
 }
 else{
   allData =await responce.json()
  
   
   await setdata()
 }
 
 
};
///////////////////////////////////////////

/////////////////////////////////////////////
searchBtn.addEventListener('click',getdata)
document.addEventListener('keydown',function(e){
  if(e.key=='Enter'){
    getdata()
  }
})

///////////////////////////////
function getday(){
  let d = new Date();
let weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
let cindex=d.getDay();
n = weekday[cindex];
console.log(n)
tomowwrow=weekday[cindex+1]
aft=weekday[cindex+2]
if(cindex==6){
  tomowwrow=weekday[0];
  aft=weekday[1];
 
}
else if(cindex==5){
  
  tomowwrow=weekday[6]
  aft=weekday[0]
  
}
else {
 
  n = weekday[cindex];
  tomowwrow=weekday[cindex+1]
  aft=weekday[cindex+2]

}
}

////////////////////////////////
function setdata(){
  return new Promise(function(){
   
  let regionName=document.querySelector('.weather-content1 h4')
  let currentDeg=document.querySelector('.weather-content1 .degree .num h2')
  let currentIcon=document.querySelector('.weather-content1 .degree .dicon img')
  let condition=document.querySelector('.weather-content1 h6')
  let today=document.getElementById('today') 
  let dFToday=document.getElementById('dFToday')
  let rainVlue=document.getElementById('rainVlue')
  let windVlue=document.getElementById('windVlue')
  let windDVlue=document.getElementById('windDVlue')
  let icons=document.querySelector('.iconsB')
  let tomorrowD=document.querySelector('.dft')
  let toicon=document.querySelector('.weather-content2  img')
  let tmax_tem=document.querySelector('.tmax-tem')
  let tmin_tem=document.querySelector('.tmin-tem')
  let tcondition_text=document.querySelector('.tcondition-text')
  let atmd=document.querySelector('.adft')
   let atoicon=document.querySelector('.weather-content3  img')
   let atmax_tem=document.querySelector('.atmax-tem')
   let atmin_tem=document.querySelector('.atmin-tem')
   let atcondition_text=document.querySelector('.atcondition-text')
   let forcast=document.querySelector('.forcast')
   let country=document.querySelector('.country')
   let city=document.querySelector('.city')
 ///
   getday()
     country.innerHTML=`${allData.location.country}`
     city.innerHTML=`${allData.location.region}`
     //
     console.log(allData)
    //
    today.innerHTML=`${n}`
    dFToday.innerHTML=`${allData.forecast.forecastday[0].date}`
    regionName.innerHTML=`${allData.location.name}`
    currentDeg.innerHTML=`${allData.current.temp_c}ºC`
    currentIcon.setAttribute('src',`https:${allData.current.condition.icon}`)
    condition.innerHTML=`${allData.current.condition.text}`
    windVlue.innerHTML=`${allData.current.wind_kph}km/h`
    rainVlue.innerHTML=`${allData.current.cloud}%`
    windDVlue.innerHTML=`${allData.current.wind_dir}`
    icons.classList.replace('d-none','d-flex')
    //
    tomorrowD.innerHTML=`${tomowwrow}`
    toicon.setAttribute('src',`https:${allData.forecast.forecastday[1].day.condition.icon}`)
    tmax_tem.innerHTML=`${allData.forecast.forecastday[1].day.maxtemp_c}ºc`
    tmin_tem.innerHTML=`${allData.forecast.forecastday[1].day.mintemp_c}ºc`
    tcondition_text.innerHTML=`${allData.forecast.forecastday[1].day.condition.text}`
    //
    atmd.innerHTML=`${aft}`
    atoicon.setAttribute('src',`https:${allData.forecast.forecastday[2].day.condition.icon}`)
    atmax_tem.innerHTML=`${allData.forecast.forecastday[2].day.maxtemp_c}ºc`
    atmin_tem.innerHTML=`${allData.forecast.forecastday[2].day.mintemp_c}ºc`
    atcondition_text.innerHTML=`${allData.forecast.forecastday[2].day.condition.text}`
    forcast.classList.replace('d-none','d-flex')
    
    
    $('.weather-content2').css('height', `${$('.weather-content1').css('height')}`)
    $('.weather-content3').css('height', `${$('.weather-content1').css('height')}`)
   
  })
 


}
inputMail.addEventListener('blur',function(){
  var regex=/^\w+@[a-zA-Z]+.com$/
  if(regex.test(inputMail.value)==true)
  { 
       subbtn.removeAttribute("disabled");
       inputMail.classList.add("is-valid");
       inputMail.classList.remove("is-invalid");
       alertEmail.classList.add("d-none");
     return true;
  }
  else{
      subbtn.disabled="true";
      inputMail.classList.add("is-invalid");
      inputMail.classList.remove("is-valid");
      alertEmail.classList.remove("d-none");
      alertEmail.innerHTML="email must be in this style ^example@example.com^"
      return false;
  }
})


subbtn.addEventListener('click',function(){
  
  localStorage.setItem('email',`${inputMail.value}`)
  alert('subscribed')
  inputMail.value=""
  inputMail.classList.remove("is-valid");
})
   