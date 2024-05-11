import ReturnButton from '@/components/ReturnButton';
import { getPokemonById } from '@/service/getPokemon';

export default async function PokemonDetail({
  params,
}: {
  params: { pokemonId: string };
}) {
  const { pokemonId } = params;
  const pokemonDetails = await getPokemonById(pokemonId);
  return (
    <section className="mt-10">
      <ReturnButton />
    </section>
  );
}
