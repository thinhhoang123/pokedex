import generateBgColor from '@/utils/generateBgColor';
import { Badge } from '@/components/ui/badge';
import ImageFallback from '@/components/ImageFallBack';
import { useRouter } from 'next/navigation';

export default function PokemonCard({ pokemon }: { pokemon: any }) {
  const route = useRouter();
  return (
    <div
      className={`relative rounded-md aspect-square flex flex-col items-center justify-center cursor-pointer group ${generateBgColor(
        pokemon.type[0]
      )}`}
      onClick={() => route.push(`/pokemon/${pokemon.id}`)}
    >
      {/* Number */}
      <p className="absolute top-2 left-2 text-gray-50 font-bold text-6xl opacity-40 drop-shadow-sm">
        #{pokemon.id}
      </p>
      {/* Type Background */}
      <ImageFallback
        src={`/typeIcon/${pokemon.type[0]}.svg`}
        width={250}
        height={250}
        alt={pokemon.ThumbnailAltText}
        className="absolute z-0 opacity-10"
      />
      {/* Pokemon Image */}
      <ImageFallback
        src={pokemon.ThumbnailImage}
        width={150}
        height={150}
        alt={pokemon.ThumbnailAltText}
        className="drop-shadow-xl group-hover:scale-125 transition-transform duration-300 ease-in-out z-10"
      />
      <div className="flex items-center absolute bottom-3 z-10">
        {/* Pokemon name */}
        <Badge className="z-10 h-fit" variant="secondary">
          {pokemon.ThumbnailAltText}
        </Badge>
        {/* Pokemon Types */}
        {pokemon.type.map((type: string) => {
          return (
            <ImageFallback
              width={50}
              key={type}
              height={50}
              src={`/type/${type}.svg`}
              alt={pokemon.ThumbnailAltText}
              className="drop-shadow-xl"
            />
          );
        })}
      </div>
    </div>
  );
}
