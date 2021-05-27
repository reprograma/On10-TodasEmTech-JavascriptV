// Fazer requisições utilizando XHR na api documentada em:
// https://ghibliapi.herokuapp.com/
// Obter lista de filmes, um filme por id, lista de pessoas e pessoa por id

function loadFilms() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://ghibliapi.herokuapp.com/films", false);
    //xhr.responseType = "json"

    xhr.onload = function () {
        const json = JSON.parse(xhr.response)
        console.log(json)
    }

    xhr.send();
}

loadFilms()