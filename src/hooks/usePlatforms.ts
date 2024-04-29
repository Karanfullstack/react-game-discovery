import { useQuery } from "@tanstack/react-query";
import Service from "../services/api-client";
import { platformData } from "../data/platformData";

const service = new Service<Platform>("/platforms/lists/parents");
export interface Platform {
	id: number;
	name: string;
	slug: string;
}

const usePlatforms = () =>
	useQuery({
		queryKey: ["platforms"],
		queryFn: service.getAll,
		staleTime: 24 * 60 * 60 * 1000,
	});

export default usePlatforms;
