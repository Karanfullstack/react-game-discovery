import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import Service, { FetchProps } from "../services/api-client";
import { type Platform } from "./usePlatforms";

const service = new Service<Game>("/games");
export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
	rating_top: number;
}

const useGame = (gameQuery: GameQuery) =>
	useInfiniteQuery<FetchProps<Game>, Error>({
		queryKey: ["games", gameQuery],
		queryFn: ({ pageParam = 1 }) =>
			service.getAll({
				params: {
					genres: gameQuery.genreId,
					parent_platforms: gameQuery.platformId,
					ordering: gameQuery.sortOrder,
					search: gameQuery.searchText,
					page: pageParam,
				},
			}),
		getNextPageParam: (lastPage, pages) => {
			return lastPage.next ? pages.length + 1 : undefined;
		},
		staleTime: 24 * 60 * 60 * 1000,
	});

export default useGame;
