import { useInfiniteQuery } from "@tanstack/react-query";
import Service, { FetchProps } from "../services/api-client";
import ms from "ms";
import useQueryStore from "../store/store";
import { Game } from "../entities/Game";

const service = new Service<Game>("/games");
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
