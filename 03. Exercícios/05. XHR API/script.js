// Fazer requisições utilizando XHR na api documentada em:
// https://ghibliapi.herokuapp.com/
// Obter lista de filmes, um filme por id, lista de pessoas e pessoa por 

1

 function loadFilms() {
     const xhr = new XMLHttpRequest();
     xhr.open("GET", "https://ghibliapi.herokuapp.com/films", false)
     //xhr.responseType = "json"

     xhr.onload = function() {
         const json = JSON.parse(xhr.response)
         console.log(json)

     }
     xhr.send();
}

// https://ghibliapi.herokuapp.Request()

// const id = 'cd3d059c-09f4-4ff3-8d63-bc765a5184fa'
// const request = new XMLHttpRequest()
// request.open('GET', `https://ghibliapi.herokuapp.com/films/${id}`)
// request.onload = function(){
//     const json = JSON.parse(request.response)
//     console.log(json)
// }

// request.send()

//com arrow function
// request.onload = ()=> console.log(JSON.parse(request.response))

// request.send()

2
//https://ghibliapi.herokuapp.com/people//

// const xhr = new XMLHttpRequest();
// xhr.open('GET', "https://ghibliapi.herokuapp.com/people")
// xhr.responseType = "json"

// xhr.onload = function(){
//   console.log(xhr.response)
// }

// xhr.send();

3

// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://ghibliapi.herokuapp.com/films");
// xhr.responseType = "json"

// xhr.onload = function(){
//     console.log(xhr.response)
// }

// xhr.send();

// function loadFilmes(diretor){
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET",`https://ghibliapi.herokuapp.com/films?director=${director}` )
//     xhr.responseType = "json"

//     xhr.onload = function () {
//         console.log(xhr.response)
//     }

//     xhr.send();

// }
// loadFilms("Hayo Miyazaki")

// com fetch
// fetch("https://ghibliapi.herokuapp.com/films?director=Hayo Miyazaki")
// .then(response => response.json())
// .then(json =>console.log(json))


//com async

// !async function() {
//     const response =await
//     fetch("https://ghibliapi.herokuapp.com/films?director=Hayo Miyazaki")
//     console.log(await.response.json())
// }()
