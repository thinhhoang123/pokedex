'use client';

import useStoreSearchPokemon from '@/store/useStoreSearchPokemon';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import uniqBy from 'lodash/uniqBy';
import generateBgColor from '@/utils/generateBgColor';
import { Badge } from '@/components/ui/badge';

export default function PokemonListItem({
  pokemonList,
}: {
  pokemonList: any[];
}) {
  const [pokemons, setPokemons] = useState(() => {
    return uniqBy(pokemonList, 'id');
  });
  const [pokemonData, setPokemonData] = useState(pokemons.slice(0, 10));
  const query = useStoreSearchPokemon((state) => state.query);

  useEffect(() => {
    if (query) {
      const filteredPokemon = pokemons.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(query.toLowerCase());
      });
      setPokemonData(filteredPokemon);
    } else {
      setPokemonData(pokemons.slice(0, 10));
    }
  }, [query]);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 w-full">
      {pokemonData.map((pokemon, index) => {
        return (
          <div
            key={index}
            className={`relative rounded-md aspect-square flex flex-col items-center justify-center cursor-pointer ${generateBgColor(
              pokemon.type[0]
            )}`}
          >
            <Image
              src={`/typeIcon/${pokemon.type[0]}.svg`}
              width={250}
              height={250}
              alt={pokemon.ThumbnailAltText}
              loader={({ src, width, quality }) => {
                return `${src}?w=${width}&q=${quality || 75}`;
              }}
              className="absolute -z-5 opacity-10"
            />
            <div className="flex">
              {pokemon.type.map((type: string) => {
                return (
                  <Image
                    src={`/type/${type}.svg`}
                    width={50}
                    height={50}
                    alt={pokemon.ThumbnailAltText}
                    loader={({ src, width, quality }) => {
                      return `${src}?w=${width}&q=${quality || 75}`;
                    }}
                    className="drop-shadow-xl"
                    key={type}
                  />
                );
              })}
            </div>

            <Image
              src={pokemon.ThumbnailImage}
              width={150}
              height={150}
              alt={pokemon.ThumbnailAltText}
              loader={({ src, width, quality }) => {
                return `${src}?w=${width}&q=${quality || 75}`;
              }}
              className="drop-shadow-lg"
            />
            <Badge className="z-10">{pokemon.ThumbnailAltText}</Badge>
          </div>
        );
      })}
    </div>
  );
}
