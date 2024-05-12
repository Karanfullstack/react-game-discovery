import { useQuery } from "@tanstack/react-query";
import Service from "../services/api-client";
import genre from "../data/genreData";
import ms from "ms";
import { Genre } from "../entities/Genre";

const service = new Service<Genre>("/genres");
const useGenre = () =>
	useQuery({
		queryKey: ["genres"],
		queryFn: service.getAll,
		staleTime: ms("1d"),
		initialData: genre,
	});

export default useGenre;
