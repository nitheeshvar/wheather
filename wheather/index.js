const apiId = "67dd9232c5ede9ffad70a3a5c966effe";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";

async function fetchCity(city){
const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiId}`);
console.log(weatherData);
const data = await weatherData.json();
console.log(data);
if(weatherData.status===404){
    document.querySelector(".error").classList.remove("erase");
    document.querySelector(".weather").classList.add("erase");
}else{
    document.querySelector(".weather-image").setAttribute("src",`./images/${data.weather[0].main}.png`);
    document.querySelector(".temp").textContent = data.main.temp;
    document.querySelector(".humidity-info").textContent = data.main.humidity;
    document.querySelector(".speed-info").textContent = data.wind.speed;
    document.querySelector(".city").textContent = city;
    document.querySelector(".error").classList.add("erase");
    document.querySelector(".weather").classList.remove("erase");
}
}
document.querySelector(".img-search").addEventListener("click",function(){
    const city  = document.querySelector(".search-city").value;
    fetchCity(city);
})