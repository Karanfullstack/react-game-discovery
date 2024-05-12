import { useQuery } from "@tanstack/react-query";
import Service from "../services/api-client";
import { Game } from "./useGame";

const service = new Service<Game>("/games");
const useGameDetail = (slug: string) => {
	return useQuery({
		queryKey: ["gamesDetail", slug],
		queryFn: () => service.getOne(slug),
	});
};

export default useGameDetail;
