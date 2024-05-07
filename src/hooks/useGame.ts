import { useInfiniteQuery } from "@tanstack/react-query";

import Service, { FetchProps } from "../services/api-client";
import { type Platform } from "./usePlatforms";
import ms from "ms";
import useQueryStore from "../store/store";

const service = new Service<Game>("/games");
export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
	rating_top: number;
}

const useGame = () => {
	const gameQuery = useQueryStore((s) => s.gameQuery);
	return useInfiniteQuery<FetchProps<Game>, Error>({
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
		staleTime: ms("1d"),
	});
};

export default useGame;
