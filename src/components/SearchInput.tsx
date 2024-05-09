'use client';
import useStoreSearchPokemon from '@/store/useStoreSearchPokemon';
import { Input } from './ui/input';
import Image from 'next/image';
import { useDebouncedCallback } from 'use-debounce';

export default function SearchInput() {
  // const searchParams = useSearchParams();
  // const pathname = usePathname();
  // const { replace } = useRouter();
  const searchPokemon = useStoreSearchPokemon((state) => state.searchPokemon);

  const handleSearch = useDebouncedCallback((value: string) => {
    searchPokemon(value);
  }, 500);

  return (
    <div className="sticky h-12 sm:w-full md:w-1/2 top-5 z-10">
      <Image
        src="/pokemon-ball.svg"
        width={20}
        height={20}
        alt="pokedex"
        className="absolute left-3 top-1/2 transform -translate-y-1/2"
      />
      <Input
        type="text"
        placeholder="Search pokemon name or id 🔎"
        className="pl-10 text-md w-full border  rounded-full shadow-lg h-full"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
}
