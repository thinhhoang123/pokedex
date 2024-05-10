import SearchInput from '@/components/SearchInput';
import Image from 'next/image';
import { Suspense } from 'react';
import PokedexListView from './_components/PokedexListView';

export default function PokedexSearch() {
  return (
    <>
      <div className="flex flex-col gap-10 items-center pt-20">
        <Image src="/pokedex.svg" width={350} height={350} alt="pokedex" />
        <SearchInput />
        <Suspense fallback={<>Loading ...</>}>
          <PokedexListView />
        </Suspense>
      </div>
    </>
  );
}
