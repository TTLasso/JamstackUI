
document.getElementById('generate').addEventListener('click', success);


function success() {
    const input = document.getElementById('input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=13862fd0b0c3a6fa22692ba012e4163f&units=metric&lang=sp`;
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then(async function (data) {
            console.log('data:', data);

            const entradaDiario = document.getElementById('diario').value;
            const result = await fetch('https://decent-malamute-79.hasura.app/v1/graphql', {
                method: 'POST',
                HEADERS: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    query: `
                        mutation MyMutation {
                            insert_entradas_diario_one(object: {ciudad: "${data.name}", entrada: "${entradaDiario}", temperatura: "${data.main.temp}"}){
                                id
                            }
                          }
                `,
                    variables: {
                    }
                })
            })
            document.getElementById('city').innerHTML = `El clima en ${data.name}:`;
            document.getElementById('temp').innerHTML = `Temperatura: ${data.main.temp}°C`;
            document.getElementById('desc').innerHTML = `Resumen: "${data.weather[0].description}"`;
            document.getElementById('sentimiento').innerHTML = `Tu ingreso en el diario para esta ciudad es: "${entradaDiario}"`;

        });

}











