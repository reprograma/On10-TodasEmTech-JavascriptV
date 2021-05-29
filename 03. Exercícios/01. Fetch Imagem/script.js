// 1.a. fetch da imagem
// [] adicionar a tag <script> no html
// [] verificar se está lendo script.js
// [] usar o método fetch() para buscar o arquivo meme.jpg
// [] usar método .then() para transformar o dado recebido
// [] apresentar <img>

//adcionado script
//a leitura está ocorrendo

const imagemDino = document.querySelector('img');
fetch("https://raw.githubusercontent.com/jaquelinedealmeida/On10-TodasEmTech-JavascriptV/master/03.%20Exercícios/02.%20Fetch%20Imagem/meme.jpg")
.then(function(response){
    return response.blob();
})
