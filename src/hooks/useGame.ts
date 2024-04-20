import useData from "./useData";
import { Genre } from "./useGenre";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
}
interface Props {
	selectedGenre: Genre | null;
}
const useGame = (selectedGenre: Props) =>
	useData<Game>("/games", { params: { genre: selectedGenre } }, [selectedGenre]);
export default useGame;
