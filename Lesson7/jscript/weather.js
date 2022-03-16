const url = "https://api.openweathermap.org/data/2.5/weather?q=Rexburg&appid=d0a0796b1c091d075434d92a3514acae&units=imperial";

fetch(url)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#current-temp').textContent = jsObject.main.temp;
    document.querySelector('#speed').textContent = 'Wind Speed: ' + jsObject.wind.speed;
    var wchill = (35.74 + (0.6215 * jsObject.main.temp))-(35.75 * Math.pow(jsObject.wind.speed,0.16)) + (0.4275*jsObject.main.temp*Math.pow(jsObject.wind.speed,0.16));
    document.querySelector('#windChill').textContent = wchill.toFixed(2);

    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#icon-src').textContent = desc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;

    
  });