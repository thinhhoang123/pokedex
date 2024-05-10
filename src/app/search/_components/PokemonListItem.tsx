'use client';

import useStoreSearchPokemon from '@/store/useStoreSearchPokemon';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import uniqBy from 'lodash/uniqBy';
import generateBgColor from '@/utils/generateBgColor';
import { Badge } from '@/components/ui/badge';
import PokemonCard from './PokemonCard';
import { Button } from '@/components/ui/button';

export default function PokemonListItem({
  pokemonList,
}: {
  pokemonList: any[];
}) {
  const numberOfPokemonEachLoad = 30;
  const [pokemons, setPokemons] = useState(() => {
    return uniqBy(pokemonList, 'id');
  });
  const [loadPokemon, setLoadPokemon] = useState(numberOfPokemonEachLoad);

  const [pokemonData, setPokemonData] = useState(
    pokemons.slice(0, loadPokemon)
  );
  const query = useStoreSearchPokemon((state) => state.query);
  const maxPokemon = pokemons.length - 1;

  useEffect(() => {
    if (query) {
      const filteredPokemon = pokemons.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(query.toLowerCase());
      });
      setPokemonData(filteredPokemon);
    } else {
      setPokemonData(pokemons.slice(0, loadPokemon));
    }
  }, [query, loadPokemon]);

  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 w-full">
        {pokemonData.map((pokemon, index) => {
          return <PokemonCard pokemon={pokemon} key={pokemon.id} />;
        })}
      </div>
      {loadPokemon < maxPokemon ? (
        <Button
          className="mb-2 rounded-full "
          onClick={() =>
            setLoadPokemon((prev) => {
              return prev + numberOfPokemonEachLoad;
            })
          }
        >
          Load more
        </Button>
      ) : null}
    </>
  );
}
