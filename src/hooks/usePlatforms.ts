import { useQuery } from "@tanstack/react-query";
import Service from "../services/api-client";
import platforms from "../data/platformData";
import { Platform } from "../entities/Platform";

const service = new Service<Platform>("/platforms/lists/parents");
const usePlatforms = () =>
	useQuery({
		queryKey: ["platforms"],
		queryFn: service.getAll,
		staleTime: 24 * 60 * 60 * 1000,
		initialData: platforms,
	});

export default usePlatforms;
