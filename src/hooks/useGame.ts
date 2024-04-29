import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { FetchProps } from "../services/api-client";
import apiClient from "../services/api-client";
import { type Platform } from "./usePlatforms";



export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
	rating_top: number;
}

const useGame = (gameQuery: GameQuery) =>
	useQuery<FetchProps<Game>, Error>({
		queryKey: ["games", gameQuery],
		queryFn: () =>
			apiClient
				.get<FetchProps<Game>>("/games", {
					params: {
						genres: gameQuery.genre?.id,
						parent_platforms: gameQuery.platform?.id,
						ordering: gameQuery.sortOrder,
						search: gameQuery.searchText,
					},
				})
				.then((res) => res.data),
		staleTime: 24 * 60 * 60 * 1000,
	});

export default useGame;
