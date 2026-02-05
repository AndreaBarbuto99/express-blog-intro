const endpoint = "http://localhost:3000/bacheca"
let myApi;
const myDiv = document.querySelector(".my-api");

axios.get(endpoint)
    .then((res) => {
        myApi = res.data;

        myApi.forEach(e => {
            myDiv.innerHTML += `
            <h2>${e.titolo}</h2>
            <p>${e.contenuto}</p>
            <img src=${e.immagine} />
            <i>${e.tags}</i> `
        });

    })
    .catch((err) => console.error("Non funziona", err))





