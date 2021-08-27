
const mainContainer = document.querySelector(".main-container")

const searchButton = document.querySelector(".search-button");
async function weatherWidget(){
    mainContainer.innerHTML="";
    const city = document.querySelector(".input").value;
    const apiKey = "ff1cadec65d9f10c3aafc2a01b14612c"
    const weatherurl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`; 
    
    const weatherData = await fetch(weatherurl +`&q=${city}`);
    const jsonWeatherData = await weatherData.json();
    const tempdiv = document.createElement('div');
    tempdiv.className = "tempdiv";
    const cityName = document.createElement('h3')
    cityName.innerHTML = `${city} <hr />
    Weather`
    const temp = document.createElement('h3');
    const temperature = Math.round(jsonWeatherData.main.temp)
    temp.innerHTML = `${temperature} <hr /> Degrees`;
    const feelsLike = document.createElement('h2');
    const weatherFeel = Math.round(jsonWeatherData.main.feels_like)
    feelsLike.innerHTML = `Today it will feel like ${weatherFeel} degrees.`;
    
    

    
    mainContainer.append(tempdiv)
    tempdiv.append(cityName, temp, feelsLike)
    
    
       
 }

    
 
        
        

searchButton.addEventListener("click", () => weatherWidget());
