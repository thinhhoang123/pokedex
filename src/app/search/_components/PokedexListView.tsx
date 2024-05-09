import { getAllPokemon } from '@/service/getPokemon';
import PokemonListItem from './PokemonListItem';

export default async function PokedexListView() {
  const pokemonlist = await getAllPokemon();
  return <PokemonListItem pokemonList={pokemonlist} />;
}
