import { useQuery } from "@tanstack/react-query";
import Service from "../services/api-client";
import genre from "../data/genreData";
import ms from "ms";
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
		staleTime: ms("1d"),
		initialData: genre,
	});

export default useGenre;
