
document.getElementById('generate').addEventListener('click', success);



function success(){
    const input = document.getElementById('input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=13862fd0b0c3a6fa22692ba012e4163f&units=metric&lang=sp`;
    fetch(url)
    .then((response) => {
    return response.json();
})
.then((data) => {

    const entradaDiario = document.getElementById('diario').value;
    document.getElementById('city').innerHTML=`El clima en ${data.name}:`;
    document.getElementById('temp').innerHTML=`Temperatura: ${data.main.temp}°C`;
    document.getElementById('desc').innerHTML=`Resumen: "${data.weather[0].description}"`;
    document.getElementById('sentimiento').innerHTML=`Tu ingreso en el diario para esta ciudad es: "${entradaDiario}"`;

    console.log('data:',data);

});

}










