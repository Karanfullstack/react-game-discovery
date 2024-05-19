import { Box, GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Expandable from "../components/Expandable";
import GameAttributes from "../components/GameAttributes";
import useGameDetail from "../hooks/useGameDetail";
import GameTrailer from "../components/GameTrailer";
import ScreenShots from "../components/ScreenShots";

const GameDetailPage = () => {
	const { slug } = useParams();
	const { data, isLoading, error } = useGameDetail(slug!);

	if (isLoading) return <Spinner />;
	if (error || !data) throw error;

	return (
		<SimpleGrid padding={5} columns={{ base: 1, md: 2 }} spacing={4}>
			<GridItem>
				<Heading>{data?.name}</Heading>
				<Expandable children={data.description_raw} />
				<GameAttributes game={data} />
			</GridItem>
			<GridItem>
				<GameTrailer gameId={data.id} />
				<ScreenShots gameId={data.id} />
			</GridItem>
		</SimpleGrid>
	);
};

export default GameDetailPage;
