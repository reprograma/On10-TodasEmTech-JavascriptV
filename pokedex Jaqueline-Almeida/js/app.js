let pokemonList = [];
let pokemonTypes = [];

function fetchTypes() {
  const request = new XMLHttpRequest();
  request.open("GET", "https://pokeapi.co/api/v2/type", false);

  request.onload = function () {
    console.log("1. Executei a requisição");

    const data = JSON.parse(request.response);

    pokemonTypes = data.results.map(function (type) {
      return type.name;
    });
  };

  request.send();
}

//async function fetchPokemonsAsync() {
// https://borgesdn.github.io/pokedex-source/pokedex.json
//}

function fetchPokemons() {
  const request = new XMLHttpRequest();
  request.open(
    "GET",
    "https://borgesdn.github.io/pokedex-source/pokedex.json",
    false
  );

  request.onload = function () {
    console.log("Lista Pokedex");
    pokemonList = JSON.parse(request.response)
  };

  request.onerror = function () {
    alert(`Network Error`);
  };

  request.send();
}

//async function getPokemonAsync(id) {
// https://pokeapi.co/api/v2/pokemon/{id}
//}

function getPokemon(id) {
  const request = new XMLHttpRequest()
  
  let pokemon; 
  request.open("GET", `https://pokeapi.co/api/v2/pokemon/${id}`, false)

  request.onload = function () {
    pokemon = JSON.parse(request.response)
  };

    request.send()
    return pokemon
};

function filterPokemon(name, type) {
  const filteredList = pokemonList.filter((pokemon) => {
    const searchName = new RegExp(name, "i");
    const checkName = searchName.test(pokemon.name);
    const checkType = type.length == 0 ? true : pokemon.type.includes(type);
    return checkName && checkType;
  });
  return filteredList;
}
