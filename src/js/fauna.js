
document.getElementById('getNews').addEventListener('click', getData);

async function getData() {
    console.log('hola');
    const url ='./_data/faunaData';
    fetch(url)
    .then((response) => {
    return response.data.json();
}).then((data) => {

    console.log('data:',data);

});

}









