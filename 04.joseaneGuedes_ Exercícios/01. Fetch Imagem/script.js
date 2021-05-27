// 1.a. fetch da imagem
// [] adicionar a tag <script> no html
// [] verificar se está lendo script.js
// [] usar o método fetch() para buscar o arquivo meme.jpg
// [] usar método .then() para transformar o dado recebido
// [] apresentar <img>

//Solução

const imagem = fetch("./meme.jpg");

imagem.then(r => r.blob())
.then(body =>{
    const blobUrl = URL.createObjectURL(body);
    const imagemDom = document.getElementById('imagem');
    imagemDom.src = blobUrl;
}); 

//Tentativa I 

/* const myImage = document.querySelector('img');

fetch('./meme.jpg')
.then(function(response) {
  return response.blob();
})
.then(function(myBlob) {
  let objectURL = URL.createObjectURL(myBlob);
  myImage.src = objectURL;
});
 */


//Tentativa II 
/* fetch('./meme.jpg').then(function(response) {
    if(response.ok) {
      response.blob().then(function(myBlob) {
        let objectURL = URL.createObjectURL(myBlob);
        myImage.src = objectURL;
      });
    } else {
      console.log('Network response was not ok.');
    }
  })
  .catch(function(error) {
    console.log('There has been a problem with your fetch operation: ' + error.message);
  }); */

  //Tentativa III

/*   const imagem = document.getElementById('imagem');

  imagem.addEventListener */

  //Fonte: https://blogs.sap.com/2019/01/07/cors-and-fioriui5-everything-you-need-to-know/