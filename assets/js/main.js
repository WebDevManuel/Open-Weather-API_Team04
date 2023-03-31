const inputText = document.querySelector('form input:nth-of-type(1)');


const sectionWeather = document.querySelector('section')

// Search function
const search = () => {
    console.log(inputText.value);
    sectionWeather.innerHTML = " ";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputText.value}&units=metric&appid=bf554b52319262426cae35c841f60ca5`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.name);
        console.log(data.main.temp);
        console.log(data.main.feels_like);
        console.log(data.weather[0].description);
        console.log(data.sys.sunrise);
        console.log(data.sys.sunset);

        let unix = data.sys.sunset;
        let unix2 = new Date(unix * 1000);
        let dateString = String(unix2);
        let sunsetTime = dateString.slice(16, 25);
        
        let sunrise = data.sys.sunrise;
        let unix3 = new Date(sunrise * 1000);
        let sunString = String(unix3);
        let sunriseTime = sunString.slice(16, 25)
        console.log(sunriseTime);


        const today = new Date()
        // console.log(today);
        // console.log(today.getDate());
        // console.log(today.getFullYear());
        // console.log(today.getMonth());
        // console.log(today.getHours());
        // console.log(today.getMinutes());
        // console.log(today)



        // Selecting the right icon
        let sectionIcons = document.getElementById('icons');
        
        // let icon = document.createElement('div');
        // sectionIcons.appendChild(icon);


        if (data.weather[0].main == "Clouds") {
sectionIcons.innerHTML += `    
            <img src="./assets/img/clouds.png" alt="">
            `
            console.log("Cloudy");
        } else if (data.weather[0].main == "Rain") {
            sectionIcons.innerHTML += `    
            <img src="./assets/img/rain.png" alt="">
            `
            console.log("Rain");
        } else if (data.weather[0].main == "Fog") {
            sectionIcons.innerHTML += `    
            <img src="./assets/img/foog.png" alt="">
            `
            console.log("Fog");
        } else if (data.weather[0].main == "Drizzle") {
            sectionIcons.innerHTML += `    
            <img src="./assets/img/dizzle.png" alt="">
            `
            console.log("Drizzle");
        } else if (data.weather[0].main == "Snow") {
            sectionIcons.innerHTML += `    
            <img src="./assets/img/snow.png" alt="">
            `
            console.log("Snow");
        } else if (data.weather[0].main == "Clear") {
            sectionIcons.innerHTML += `    
            <img src="./assets/img/clear.png" alt="">
            `
            console.log("Clear");
        } else if (data.weather[0].main == "Thunderstorm") {
            sectionIcons.innerHTML += `    
            <img src="./assets/img/thunderstorm.png" alt="">
            `
            console.log("Thunderstorm");
        } else {
            sectionIcons.innerHTML += `    
            <img src="./assets/img/rainbow.png" alt="">
            `
        }



        // Begin table section
        // Creating Article - Div etc.
        const article = document.createElement('article');
        sectionWeather.appendChild(article);
        

        article.innerHTML += `
        <div><p>Time:</p><p>${today.getHours()}:${today.getMinutes()}</p></div>
        `
        article.innerHTML += `
        <div><p>Name:</p><p>${data.name}</p></div>
        `
        article.innerHTML += `
        <div><p>Temperatur:</p><p>${data.main.temp}°</p></div>
        `
        article.innerHTML += `
        <div><p>Feels like:</p><p>${data.main.feels_like}°</p></div>
        `
        article.innerHTML += `
        <div><p>Description:</p><p>${data.weather[0].main}</p></div>
        `
        article.innerHTML += `
        <div><p>Sunrise:</p><p>${sunriseTime.substring(1, 5)}</p></div>
        `
        article.innerHTML += `
        <div><p>Sunset:</p><p>${sunsetTime.substring(1, 5)}</p></div>
        `
        article.innerHTML += `
        <div><p>Date:</p><p>${today.getDate()}.0${today.getMonth()+1}.${today.getFullYear()}</p></div>
        `

    })
}