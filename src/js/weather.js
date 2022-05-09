
document.getElementById('generate').addEventListener('click', success);

function success(){
    const input = document.getElementById('input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${process.env.WEATHER_API_KEY}`;
    fetch(url)
    .then((response) => {
    return response.json();
})
.then((data) => {

    document.getElementById('city').innerHTML=data.name;
    document.getElementById('temp').innerHTML=data.main.temp;
    document.getElementById('main').innerHTML=data.weather[0].main;
    document.getElementById('desc').innerHTML=data.weather[0].description;

    console.log('data:',data);

});

}

