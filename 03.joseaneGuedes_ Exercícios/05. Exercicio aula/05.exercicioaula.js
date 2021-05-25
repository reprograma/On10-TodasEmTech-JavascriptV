// Exercício

//Refatore o código abaixo utilizando _arrow functions_ (apenas as declarações na chamada da função `ask`)

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

/* ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
); */

// Solução:

ask( "Do you agree?", ()=> { alert("You agreed."); }, ()=> { alert("You canceled the execution."); } ); 
