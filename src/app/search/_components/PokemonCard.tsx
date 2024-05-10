import generateBgColor from '@/utils/generateBgColor';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

export default function PokemonCard({ pokemon }: { pokemon: any }) {
  return (
    <div
      className={`relative rounded-md aspect-square flex flex-col items-center justify-center cursor-pointer ${generateBgColor(
        pokemon.type[0]
      )}`}
    >
      <p className="absolute top-2 left-2 text-gray-50 font-bold text-6xl opacity-40 drop-shadow-sm">
        #{pokemon.id}
      </p>
      <Image
        src={`/typeIcon/${pokemon.type[0]}.svg`}
        width={250}
        height={250}
        alt={pokemon.ThumbnailAltText}
        loader={({ src, width, quality }) => {
          return `${src}?w=${width}&q=${quality || 75}`;
        }}
        className="absolute z-0 opacity-10"
      />

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
      <div className="flex items-center absolute bottom-3 z-10">
        <Badge className="z-10 h-fit" variant="secondary">
          {pokemon.ThumbnailAltText}
        </Badge>
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
    </div>
  );
}
