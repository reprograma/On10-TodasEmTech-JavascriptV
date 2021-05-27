// fetch do json
// [] adicionar a tag <script> no html
// [] verificar se está lendo script.js
console.log(document.querySelector('script')) // Exibe no console a tag script 
// [] criar uma função async/await chamada buscaTexto()
// [] usar fetch() para buscar o arquivo aluna.json
// [] apresentar da seguinte forma:
/* 
<div id="root">
  <h3>Nome da Aluna</h3>
  <p>Turma 5</p>
  <a href="github.com/nome-da-aluna" target="_blank">Github</a>
</div>
*/

let div = document.getElementById("root");
let h3 = document.createElement("h3");
let p = document.createElement("h3");
let a = document.createElement("a");
a.target = "_blank";
a.innerText = "Github";

async function buscaTexto() {
  await fetch("./aluna.json")
    .then((resposta) => resposta.json())
    .then((resposta) => {
      h3.innerText = `Nome da Aluna: ${resposta.nome}`
      p.innerText = `Turma: ${resposta.turma}`
      a.href = resposta.github
    })
    .catch((erro) => {
      console.log(erro)
      alert("Infelizmente não estamos conseguindo reproduzir o texto nesta página. Feche-a e tente outro dia :(")
    })
};
buscaTexto();
div.appendChild(h3);
div.appendChild(p);
div.appendChild(a);