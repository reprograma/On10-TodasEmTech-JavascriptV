// fetch do json
// [] adicionar a tag <script> no html
// [] verificar se está lendo script.js
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

async function buscaJson() {
  try {
    let response = await fetch('./aluna.json');
    let aluna = await response.json()
    let html = `<h3> Nome da Aluna: ${aluna.nome}</h3><p>Turma: ${aluna.turma}</p> Github Link: <a target="_blank" href="${aluna.github}">Github</a>`
    let root = document.getElementById("root")
    root.innerHTML = html
  } catch (err) {
    console.log(err);
  }
}
buscaJson()