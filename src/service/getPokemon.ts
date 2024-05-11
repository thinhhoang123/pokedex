const getAllPokemon = async () => {
  const response = await fetch('https://www.pokemon.com/us/api/pokedex/kalos');
  if (!response.ok) return '';
  const data = await response.json();
  return data;
};
const getPokemonById = async (id: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/pokemon/${id}`);
  if (!response.ok) return '';
  const data = await response.json();
  return data;
};
export { getAllPokemon, getPokemonById };
