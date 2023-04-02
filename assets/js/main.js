const inputText = document.querySelector('form input:nth-of-type(1)');
const sectionWeather = document.querySelector('section')
const today = new Date()

/*######################################
                SEARCH FUNCTION 
######################################*/

const search = () => {
    // console.log(inputText.value);
    sectionWeather.innerHTML = " ";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputText.value}&units=metric&appid=bf554b52319262426cae35c841f60ca5`)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            // console.log(data.name);
            // console.log(Math.floor(data.main.temp));
            // console.log(data.main.feels_like);
            // console.log(data.weather[0].description);
            // console.log(data.sys.sunrise);
            // console.log(data.sys.sunset);

            // Changing UNIX Time to hours by using "String()"
            let unix = data.sys.sunset;
            let unix2 = new Date(unix * 1000);
            let dateString = String(unix2);
            let sunsetTime = dateString.slice(15, 27);
            // console.log(sunsetTime);

            let sunrise = data.sys.sunrise;
            let unix3 = new Date(sunrise * 1000);
            let sunString = String(unix3);
            let sunriseTime = sunString.slice(15, 27)
            // console.log(sunriseTime);


            /*######################################
                    IF & ELSE for getting out icons 
                & 
                    output cityname, icon, temperature
            ######################################*/

            let sectionIcons = document.getElementById('icons');

            if (data.weather[0].main == "Clouds") {
                sectionIcons.innerHTML += `
            <span>${data.name}</span>    
            <img src="./assets/img/clouds.png" alt="clouds">
            <p>${Math.floor(data.main.temp)}°</p>
            `
            } else if (data.weather[0].main == "Rain") {
                sectionIcons.innerHTML += `
            <span>${data.name} </span>    
            <img src="./assets/img/rain.png" alt="rain">
            <p>${Math.floor(data.main.temp)}°</p>
            `
            } else if (data.weather[0].main == "Fog") {
                sectionIcons.innerHTML += `
            <span>${data.name}</span>   
            <img src="./assets/img/foog.png" alt="fog">
            <p>${Math.floor(data.main.temp)}°</p>
            `
            } else if (data.weather[0].main == "Drizzle") {
                sectionIcons.innerHTML += `
            <span>${data.name}</span>   
            <img src="./assets/img/dizzle.png" alt="dizzle">
            <p>${Math.floor(data.main.temp)}°</p>
            `
            } else if (data.weather[0].main == "Snow") {
                sectionIcons.innerHTML += `
            <span>${data.name}</span>    
            <img src="./assets/img/snow.png" alt="snow">
            <p>${Math.floor(data.main.temp)}°</p>
            `
            } else if (data.weather[0].main == "Clear") {
                sectionIcons.innerHTML += `
            <span>${data.name}</span> 
            <img src="./assets/img/clear.png" alt="clear">
            <p>${Math.floor(data.main.temp)}°</p>
            `
            } else if (data.weather[0].main == "Thunderstorm") {
                sectionIcons.innerHTML += `
            <span>${data.name}</span>   
            <img src="./assets/img/thunderstorm.png" alt="thunderstorm">
            <p>${Math.floor(data.main.temp)}°</p>
            `
            } else {
                sectionIcons.innerHTML += `<span>${data.name}</span> 
            <img src="./assets/img/rainbow.png" alt="rainbow">
            <p>${Math.floor(data.main.temp)}°</p>
            `
            }

            /*######################################
                            BEGIN TABLE SECTION
                            & CREATING NEW ELEMENT
            ######################################*/

            const article = document.createElement('article');
            sectionWeather.appendChild(article);

            article.innerHTML += `
        <div><p>Time</p><p>${today.getHours()}:${today.getMinutes()}</p></div>
        `
            //${(today.getMinutes()<10?'0':'') + today.getMinutes()}

            article.innerHTML += `
        <div><p>Date</p><p>${today.getDate()}.0${today.getMonth() + 1}.${today.getFullYear()}</p></div>
        `
            article.innerHTML += `
        <div><p>Feels like</p><p>${Math.floor(data.main.feels_like)}°</p></div>
        `
            article.innerHTML += `
        <div><p>Description</p><p>${data.weather[0].main}</p></div>
        `
            article.innerHTML += `
        <div><p>Sunrise</p><p>${sunriseTime.substring(1, 6)}</p></div>
        `
            article.innerHTML += `
        <div><p>Sunset</p><p>${sunsetTime.substring(1, 6)}</p></div>
        `
        })
}

