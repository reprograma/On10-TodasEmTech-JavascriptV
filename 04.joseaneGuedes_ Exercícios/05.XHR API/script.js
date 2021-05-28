// Fazer requisições utilizando XHR na api documentada em:
// https://ghibliapi.herokuapp.com/
// Obter lista de filmes, um filme por id, lista de pessoas e pessoa por id

//Requisicao I
/* function loadFilms() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://ghibliapi.herokuapp.com/films", false);
    //xhr.responseType = "json"

    xhr.onload = function () {
        const json = JSON.parse(xhr.response)
        console.log(json)
    }

    xhr.send();
}

loadFilms() */

//Requisicao II

/*  https://ghibliapi.herokuapp.com/films/<id> */

//const id = 'cd3d059c-09f4-4ff3-8d63-bc765a5184fa'
//const request = new XMLHttpRequest()
//request.open('GET', `https://ghibliapi.herokuapp.com/films/${id}`)
/* request.onload = function () {
    const json = JSON.parse(request.response)
    console.log(json)
} */

//request.onload = ()=> console.log(JSON.parse(request.response))   


//request.send()


//requisicao III:
/* const xhr = new XMLHttpRequest(); 
xhr.open("GET", "https://ghibliapi.herokuapp.com/films?director=Hayao Miyazaki"); 
xhr.responseType = "json" 
xhr.onload = function () { console.log(xhr.response) } 
xhr.send(); 
 */


//requisicao IV: 

/* function loadFilms(director) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://ghibliapi.herokuapp.com/films?director=${director}`)
    xhr.responseType = 'json'

    xhr.onload = function () {
        console.log(xhr.response)
    }
    xhr.send();
}
loadFilms('Hayao Miyazaki') */

//requisicao IV com codigo refatorado:
!async function () { 
    const response = await fetch("https://ghibliapi.herokuapp.com/films?director=Hayao Miyazaki") 
    console.log(await response.json()) }() 