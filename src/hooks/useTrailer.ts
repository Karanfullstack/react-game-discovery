// TODO FETCHING TRAILERS USING CUSTOM HOOK

import { useQuery } from "@tanstack/react-query";
import Service from "../services/api-client";
import { TrailerResults } from "../entities/Trailer";

export default function useTrailer(gameId: number) {
	const service = new Service<TrailerResults>(`/games/${gameId}/movies`);
	return useQuery({
		queryKey: ["trailer", gameId],
		queryFn: () => service.getAll(),
	});
}
