fetchKantoPokemon();


function fetchKantoPokemon() {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    .then((response) => response.json())
    .then(function (allpokemon) {
      allpokemon.results.forEach(function (pokemon) {
        fetchPokemonData(pokemon);
      });
    });
}

function fetchPokemonData(pokemon) {
  let url = pokemon.url;
  fetch(url)
    .then((response) => response.json())
    .then(function (pokeData) {
      displayPokemon(pokeData);
    });
}

function displayPokemon(pokeData) {
  const pokemonContainer = document.getElementById('pokemonContainer');

  const pokemonName = document.createElement('h2');
  pokemonName.textContent = pokeData.name;

  const pokemonImage = document.createElement('img');
  pokemonImage.src = pokeData.sprites.front_default;
  pokemonImage.alt = pokeData.name;

  pokemonContainer.appendChild(pokemonName);
  pokemonContainer.appendChild(pokemonImage);
}


function fetchImage() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151', {
      method: 'GET',
      headers: {
        "x-rapidapi-host": "pokeapi.co/api/v2/pokemon?limit=151"
      }
    })
      .then(response => response.blob())
      .then(data => {
      })
      .catch(error => console.error(error));
  }

  const postContainer = document.getElementById('postContainer');
  const button = document.createElement('button');
  button.textContent = 'Get a pokemon';
  button.addEventListener('click', () => {
    pokedex();
  });

  postContainer.appendChild(button);
