import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import Service, { FetchProps } from "../services/api-client";
import { apiClient } from "../services/api-client";
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
	useQuery<FetchProps<Game>, Error>({
		queryKey: ["games", gameQuery],
		queryFn: () =>
			service.getAll({
				params: {
					genres: gameQuery.genre?.id,
					parent_platforms: gameQuery.platform?.id,
					ordering: gameQuery.sortOrder,
					search: gameQuery.searchText,
				},
			}),
		staleTime: 24 * 60 * 60 * 1000,
	});

export default useGame;
