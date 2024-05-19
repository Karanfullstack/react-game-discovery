import { useQuery } from "@tanstack/react-query";
import { ScreenShots } from "../entities/screenshots";
import Service from "../services/api-client";

export default function useScreenShots(gameId: number) {
	const service = new Service<ScreenShots>(`/games/${gameId}/screenshots`);
	return useQuery({
		queryKey: ["screenshots", gameId],
		queryFn: () => service.getAll(),
	});
}
