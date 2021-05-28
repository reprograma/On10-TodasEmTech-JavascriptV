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

const buscaImagem = async () => {
    const response = await fetch('./meme.jpg');
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const myBlob = await response.blob();
    const objectURL = URL.createObjectURL(myBlob);
    const image = document.getElementById('imagem');
    image.src = objectURL;
  }
  
  buscaImagem()
    .catch(e => {
      console.log('There has been a problem with your fetch operation: ' + e.message);
    });