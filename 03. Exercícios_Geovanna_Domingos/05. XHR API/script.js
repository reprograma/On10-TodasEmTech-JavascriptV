// Fazer requisições utilizando XHR na api documentada em:
// https://ghibliapi.herokuapp.com/

const request = new XMLHttpRequest();
request.open("GET", "https://ghibliapi.herokuapp.com/people")
request.responseType = "json"
request.onload = function () {
    console.log(request.response)
};

request.send()

// Obter lista de filmes, um filme por id, lista de pessoas e pessoa por id

const id = "cd3d059c-09f4-4ff3-8d63-bc765a5184fa"

const requestB = new XMLHttpRequest();
requestB.open("GET", `https://ghibliapi.herokuapp.com/films/${id}`, false)

requestB.onload = function () {
    const json = JSON.parse(requestB.response)

    console.log(json)
};

requestB.send()

// Obter lista de pessoas
const request3 = new XMLHttpRequest();
request3.open("GET", "https://ghibliapi.herokuapp.com/people")
request3.responseType = "json"
request3.onload = function () {
    console.log(request3.response)
};

request3.send()

// Obter lista de pessoas por id 

const id2 = "ba924631-068e-4436-b6de-f3283fa848f0"

const request4 = new XMLHttpRequest();
request4.open("GET", `https://ghibliapi.herokuapp.com/people/${id2}`, false)

request4.onload = function () {
    const json = JSON.parse(request4.response)

    console.log(json)
};

request4.send()