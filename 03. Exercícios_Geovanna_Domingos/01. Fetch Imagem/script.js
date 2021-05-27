// 1.a. fetch da imagem
// [] adicionar a tag <script> no html
// [] verificar se está lendo script.js
console.log(document.querySelector('script')) // Exibe no console a tag script 

let body = document.querySelector('body'); // seleciona a tag body do html que recebeu esse script
let imagem = document.getElementById('imagem'); // cria uma tag imagem qualquer 
imagem.alt = "meme"; // atribui um "alt", cujo valor é "meme", a essa tag imagem qualquer


let requisitarImagem = async() => {
    // [] usar o método fetch() para buscar o arquivo meme.jpg
    await fetch("./meme.jpg")
    //await com outra opção de endereço da imagem: await fetch("https://raw.githubusercontent.com/reprograma/On10-TodasEmTech-JavascriptV/master/03.%20Exerc%C3%ADcios/02.%20Fetch%20Imagem/meme.jpg")
    // [] usar método .then() para transformar o dado recebido
        .then((resposta)=>resposta.blob()) // transforma a resposta em um blob, que é uma coleção de dados binários. O blob geralmente representa objetos de imagem e de áudio.
        .then((resposta) => URL.createObjectURL(resposta))
        .then((resposta) => imagem.src = resposta)// atribui um src à tag de imagem e perminte, assim, que essa imagem seja apresentada no html
        .catch((erro) => console.log(erro))
}; 
requisitarImagem();