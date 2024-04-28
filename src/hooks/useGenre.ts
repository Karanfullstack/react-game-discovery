import { useQuery } from "@tanstack/react-query";
import { FetchProps } from "./useData";
import apiClient from "../services/api-client";
import { genreData } from "../data/genreData";
export interface Genre {
	id: number;
	name: string;
	image_background: string;
	slug: string;
}

const useGenre = () =>
	useQuery({
		queryKey: ["genres"],
		queryFn: () =>
			apiClient.get<FetchProps<Genre>>("/genres").then((res) => res.data),
		staleTime: 24 * 60 * 60 * 1000,
		initialData: genreData,
	});

export default useGenre;
