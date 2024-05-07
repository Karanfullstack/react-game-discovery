import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

export default function GameGrid() {
	const { data, error, isLoading, fetchNextPage, hasNextPage } = useGame();
	const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

	if (error) return <Text>{error.message}</Text>;
	const pagesLength =
		data?.pages.reduce((total, pages) => total + pages.results.length, 0) || 0;
	return (
		<>
			<InfiniteScroll
				dataLength={pagesLength}
				next={fetchNextPage}
				hasMore={!!hasNextPage}
				loader={<Spinner />}
			>
				<SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={5}>
					{isLoading &&
						count.map((_, index) => (
							<GameCardContainer key={index}>
								<GameCardSkeleton />
							</GameCardContainer>
						))}
					{data?.pages.map((item, index) => (
						<React.Fragment key={index}>
							{item?.results.map((game) => (
								<GameCardContainer key={game.id}>
									<GameCard game={game} />
								</GameCardContainer>
							))}
						</React.Fragment>
					))}
				</SimpleGrid>
			</InfiniteScroll>
		</>
	);
}
