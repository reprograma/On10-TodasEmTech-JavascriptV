// fetch da imagem
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] usar o método fetch() para buscar o arquivo meme.jpg
// [] usar método .then() para transformar o dado recebido
// [] apresentar <img>

// melhorando o código
// [] tratar o erro com método .catch()
// [] criar uma função chamada buscaImagem()
// [] mudar para async/await
// [] usar arrow function


!async function buscaImagem() {
const imagemDino = await fetch("https://raw.githubusercontent.com/jaquelinedealmeida/On10-TodasEmTech-JavascriptV/master/03.%20Exercícios/02.%20Fetch%20Imagem/meme.jpg")
   .then((resposta) => resposta)
   .catch((error) =>{
       console.log(error);
   })

    buscaImagem()
}