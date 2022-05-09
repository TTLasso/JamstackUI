


document.getElementById('generate').addEventListener('click', success);

function success(){
    const input = document.getElementById('input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=13862fd0b0c3a6fa22692ba012e4163f`;
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

