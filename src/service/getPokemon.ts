const getAllPokemon = async () => {
  const response = await fetch('https://www.pokemon.com/us/api/pokedex/kalos', {
    cache: 'no-store',
  });
  if (!response.ok) return '';
  const data = await response.json();
  return data;
};

export { getAllPokemon };
