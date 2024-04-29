import { useQuery } from "@tanstack/react-query";
import { genreData } from "../data/genreData";
import Service from "../services/api-client";

const service = new Service<Genre>("/genres");
export interface Genre {
	id: number;
	name: string;
	image_background: string;
	slug: string;
}

const useGenre = () =>
	useQuery({
		queryKey: ["genres"],
		queryFn: service.getAll,
		staleTime: 24 * 60 * 60 * 1000,
		initialData: genreData,
	});

export default useGenre;
