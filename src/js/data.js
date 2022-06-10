
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
        let ingreso = document.createElement("div");
        let entrada = document.createElement("div");
        let borrar = document.createElement("button");
        ingreso.appendChild(entrada);
        ingreso.appendChild(borrar);
        borrar.innerText = `Eliminar entrada`;
        document.getElementById('faunaData').appendChild(ingreso);
        let id = result.data.entradas_diario[i].id;
        entrada.innerHTML = `Entrada en: ${result.data.entradas_diario[i].ciudad}-- Texto ingresado: ${result.data.entradas_diario[i].entrada}-- La temperatura fue: ${result.data.entradas_diario[i].temperatura}°C`
        ingreso.setAttribute("id", `parent${id}`);
        borrar.setAttribute("id", id);
        async function deleteData() {
            console.log(`mostrando ${id}`);
            const deleteData = await fetch('https://decent-malamute-79.hasura.app/v1/graphql', {
                method: 'POST',
                HEADERS: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    query: `
                    mutation MyMutation {
                        delete_entradas_diario_by_pk(id: "${id}") {
                          id
                        }
                      }
                      
              
        `,
                    variables: {
                    }
                })
            })
            document.getElementById(`parent${id}`).setAttribute("style", "display: none");
        }
        borrar.addEventListener('click', function confirm() {
            var resultado = window.confirm('¿Deseas eliminar la entrada?');
            if (resultado === true) {
                deleteData();
                window.alert('Entrada borrada');
            } else {
                window.alert('Entrada conservada');
            }
        })

    }
});
