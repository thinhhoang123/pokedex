const getAllPokemon = async () => {
  const response = await fetch('https://www.pokemon.com/us/api/pokedex/kalos');
  if (!response.ok) return '';
  const data = await response.json();
  return data;
};

export { getAllPokemon };
