// fetch de texto
// [] adicionar a tag <script> no html
// [] verificar se está lendo script.js
// [] criar uma função async/await chamada buscaTexto()
// [] usar fetch() para buscar o arquivo texto.txt
// [] tratar o erro com método .catch()

!async function buscaTextoAsync() {
    const response = await fetch("./")
    .then((response) => response.json)
.catch((error) => {
    console.log(error);

});