const apikey = "4ed24f8d13c56c9b23ef6d6c0982a395";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let input = document.querySelector(".search input");
let button = document.querySelector(".search button");
let img = document.querySelector(".weatherIcon");

async function weather(city){
    const respone = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await respone.json();

    console.log(data)
    if(respone.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var city = document.querySelector(".city").innerHTML = data.name;
        var temp = document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        var humidity = document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        var wind = document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
        if(data.weather[0].main == "Clouds"){
            img.src = "images/clouds.png"
        }
        else if(data.weather[0].main == "Clear"){
            img.src = "images/clear.png"
        }
        else if(data.weather[0].main == "Rain"){
            img.src = "images/rain.png"
        }
        else if(data.weather[0].main == "Mist"){
            img.src = "images/mist.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            img.src = "images/drizzle.png"
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    
        console.log(data)    
    }
}

button.addEventListener('click', ()=>{
    weather(input.value);
});

input.addEventListener("keydown", ()=>{
    weather(input.value);
})