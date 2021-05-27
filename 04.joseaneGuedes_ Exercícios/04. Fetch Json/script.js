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

//Solução:
async function buscaTexto() {
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
buscaTexto()


//Outra solução:
/* async function buscaTexto() {
  let response = await fetch('./aluna.json').catch(error => console.log(error)) 
  if (response && response.ok) {
    let aluna = await response.json()
    let html = `<h3>${aluna.nome}</h3><p>Turma ${aluna.turma}</p><a target="_blank" href="${aluna.github}">Github</a>`
    let root = document.getElementById("root") 
    root.innerHTML = html
  } else {
    console.log("error")
  }
}
buscaTexto() */

//fonte: https://docs.google.com/document/d/1JuLNVPGV8NnlOUZA1jPi5CqzFn6s7QMRSoYGDjC8qCs/edit