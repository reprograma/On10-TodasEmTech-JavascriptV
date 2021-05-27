// fetch de texto
// [] adicionar a tag <script> no html
// [] verificar se está lendo script.js
console.log(document.querySelector('script')) // Exibe no console a tag script 
// [] criar uma função async/await chamada buscaTexto()
// [] usar fetch() para buscar o arquivo texto.txt
// [] tratar o erro com método .catch()
async function buscaTexto(){
    await fetch("./texto.txt")
        .then((resposta) => resposta.text())   
        .then((resposta) => document.getElementById("texto").innerText = resposta)
        .catch((erro)=>{
            console.log(erro)
            alert("Infelizmente não estamos conseguindo reproduzir o texto nesta página. Feche-a e tente outro dia :(")
        })
}
buscaTexto()
