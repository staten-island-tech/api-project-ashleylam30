const link = `https://pokeapi.co/api/v2/pokemon/`;

async function api(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}
api(link);
