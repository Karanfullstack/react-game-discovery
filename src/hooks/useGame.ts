import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
	id: number;
	name: string;
 background_image:string;
}
interface GameFetchingProps {
	count: number;
	results: Game[];
}

export default function useGame() {
	const [games, setGames] = useState<Game[]>([]);
	const [errors, setErrors] = useState("");

	useEffect(() => {
		const controller = new AbortController();
		apiClient
			.get<GameFetchingProps>("/games", { signal: controller.signal })
			.then((res) => setGames(res.data.results))
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setErrors(err.message);
			});
		return () => controller.abort();
	}, []);
	return { games, errors, setErrors, setGames };
}
