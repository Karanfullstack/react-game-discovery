import { Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";

export default function GameGrid() {
	const { errors, games } = useGame();
	return (
		<>
			{errors && <Text>{errors}</Text>}
			<ul>
				{games.map((game) => (
					<li key={game.id}>{game.name}</li>
				))}
			</ul>
		</>
	);
}
