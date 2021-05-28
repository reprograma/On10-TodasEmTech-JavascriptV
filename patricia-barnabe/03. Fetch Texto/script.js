// fetch de texto
// [] adicionar a tag <script> no html
// [] verificar se está lendo script.js
// [] criar uma função async/await chamada buscaTexto()
// [] usar fetch() para buscar o arquivo texto.txt
// [] tratar o erro com método .catch()

async function buscaTexto() {
    try {
        const response = await fetch('./texto.txt');
        const texto = await response.text();
        const textoHTML = document.getElementById('texto')
        textoHTML.innerText = texto
    } catch (err) {
        console.log(err);
    }
}
buscaTexto()