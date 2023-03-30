const sectionWeather = document.querySelector('section')
console.log(sectionWeather);

fetch("https://api.openweathermap.org/data/2.5/weather?q=berlin&units=metric&appid=bf554b52319262426cae35c841f60ca5")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.name);
        console.log(data.main.temp);
        console.log(data.main.feels_like);
        console.log(data.weather[0].description);
        console.log(data.sys.sunrise);
        console.log(data.sys.sunset);
        console.log(data.main.temp);

        const today = new Date()
        console.log(today);
        console.log(today.getDate());
        console.log(today.getFullYear());
        console.log(today.getMonth());
        console.log(today.getHours());
        console.log(today.getMinutes());


        sectionWeather.innerHTML += `
        <div>
        <h1>Weather in Berlin, GER</h1>
        <div>

        <p>Broken clouds</p>
        </div>
        <p>${data.name}</p>
        
        <p>${data.sys.sunrise}</p>
        <p>${data.sys.sunset}</p>
        </div>
        `
    })