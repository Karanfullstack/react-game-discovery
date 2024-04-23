import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import useGame from "../hooks/useGame";

interface Props {
	gameQuery: GameQuery;
}
export default function GameGrid({ gameQuery }: Props) {
	const { errors, data, isLoading } = useGame(gameQuery);
	const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	console.log(errors);
	if (errors) return <Text>{errors}</Text>;
	return (
		<SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={5}>
			{isLoading &&
				count.map((_, index) => (
					<GameCardContainer key={index}>
						<GameCardSkeleton />
					</GameCardContainer>
				))}
			{data.map((game) => (
				<GameCardContainer key={game.id}>
					<GameCard game={game} />
				</GameCardContainer>
			))}
		</SimpleGrid>
	);
}
