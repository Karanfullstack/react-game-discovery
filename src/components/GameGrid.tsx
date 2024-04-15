import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

export default function GameGrid() {
	const { errors, games, isLoading } = useGame();
	const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	return (
		<>
			{errors && <Text>{errors}</Text>}
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
				padding="10px"
				spacing="10px"
			>
				{isLoading && count.map((_) => <GameCardSkeleton />)}
				{games.map((game) => (
					<GameCard game={game} />
				))}
			</SimpleGrid>
		</>
	);
}
