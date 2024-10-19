$(document).ready(function(){
    const apiId = "67dd9232c5ede9ffad70a3a5c966effe";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
    
    async function fetchCity(city){
    const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiId}`);
    console.log(weatherData);
    const data = await weatherData.json();
    console.log(data);
    if(weatherData.status===404){
        $(".error").removeClass("erase");
        $(".weather").addClass("erase");
    }else{
        $(".weather-image").attr("src",`./images/${data.weather[0].main}.png`);
        $(".temp").text(data.main.temp);
        $(".humidity-info").text(data.main.humidity);
        $(".speed-info").text(data.wind.speed);
        $(".city").text(city);
        $(".error").addClass("erase");
        $(".weather").removeClass("erase");
    }
    }
    $(".img-search").click(function(){
        const city  = $(".search-city").val;
        fetchCity(city);
    })
})
