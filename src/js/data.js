
document.getElementById('getNews').addEventListener('click', async function getData() {
    const result = await fetch('https://decent-malamute-79.hasura.app/v1/graphql', {
        method: 'POST',
        HEADERS: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            query: `
            query MyQuery {
                entradas_diario {
                  ciudad
                  entrada
                  id
                  temperatura
                }
              }
            `,
            variables: {}
        })
    }).then((response) => response.json());
    console.log({ result })
    for (let i = 0; i < result.data.entradas_diario.length; i++) {
        let entrada = document.createElement("div");
        document.getElementById('faunaData').appendChild(entrada);
        entrada.innerHTML = `${result.data.entradas_diario[i].ciudad} ${result.data.entradas_diario[i].entrada} ${result.data.entradas_diario[i].temperatura}`
    }
});