import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";

export default function GameGrid() {
	const { errors, games } = useGame();
	return (
		<>
			{errors && <Text>{errors}</Text>}
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
				padding="10px"
				spacing="15px"
			>
				{games.map((game) => (
					<GameCard game={game} />
				))}
			</SimpleGrid>
		</>
	);
}
