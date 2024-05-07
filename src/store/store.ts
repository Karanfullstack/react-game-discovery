import { create } from "zustand";

interface GameQuery {
	genreId?: number | undefined;
	platformId?: number | undefined;
	sortOrder?: string | undefined;
	searchText?: string | undefined;
}

interface GameQueryStore {
	gameQuery: GameQuery;
	setSearchText: (searchText: string) => void;
	setSortOrder: (sortOrder: string) => void;
	setPlatformId: (platformId: number) => void;
	setGenreId: (genreId: number) => void;
}

const useQueryStore = create<GameQueryStore>(set=> ({
  gameQuery:{},
  setSearchText:(searchText)=> set(()=> ({gameQuery:{searchText}})),
  setGenreId:(genreId)=> set((store)=> ({gameQuery:{...store.gameQuery, genreId}})),
  setPlatformId:(platformId)=> set((store)=> ({gameQuery:{...store.gameQuery, platformId}})),
  setSortOrder:(sortOrder) => set((store)=> ({gameQuery:{...store.gameQuery, sortOrder}}))
}))

export default useQueryStore