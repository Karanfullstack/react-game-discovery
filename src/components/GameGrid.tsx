import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame, { Platform } from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";

interface Props {
	selectedGenre: Genre | null;
	selectedPlatform: Platform | null
}
export default function GameGrid({ selectedGenre,selectedPlatform }: Props) {
	const { errors, data, isLoading } = useGame(selectedGenre,selectedPlatform);
	const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	return (
		<>
			{errors && <Text>{errors}</Text>}
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
		</>
	);
}
