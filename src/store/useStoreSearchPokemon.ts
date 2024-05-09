import { create } from 'zustand';
type State = {
  query: string;
};

type Action = {
  searchPokemon: (lastName: State['query']) => void;
};

const useStoreSearchPokemon = create<State & Action>((set) => ({
  query: '',
  searchPokemon: (value: string) => set({ query: value }),
}));

export default useStoreSearchPokemon;
