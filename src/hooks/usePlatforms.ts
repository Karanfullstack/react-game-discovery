import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Platform } from "./useGame";
import { FetchProps } from "../services/api-client";
import { platformData } from "../data/platformData";

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
	useQuery({
		queryKey: ["platforms"],
		queryFn: () =>
			apiClient
				.get<FetchProps<Platform>>("platforms/lists/parents")
				.then((res) => res.data),
		staleTime: 24 * 60 * 60 * 1000,
		initialData: platformData,
	});

export default usePlatforms;
