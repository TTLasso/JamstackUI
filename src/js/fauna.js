
document.getElementById('getNews').addEventListener('click', getData);

async function getData() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: "get",
        headers: myHeaders,
        redirect: "follow",
        
    };
    
    fetch("https://v1.nocodeapi.com/pslasso/fauna/ESQSiPQpXsuoBPJf/getCollections", requestOptions)
        .then(response => response.text())
        .then(result => document.getElementById('faunaData').innerHTML = `${result}`)
        .catch(error => console.log('error', error));
}








