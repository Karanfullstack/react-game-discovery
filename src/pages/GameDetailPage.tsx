import { Box, Heading, Spinner } from "@chakra-ui/react";
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
		<Box padding={5}>
			<Heading>{data?.name}</Heading>
			<Expandable children={data.description_raw} />
			<GameAttributes game={data} />
			<GameTrailer gameId={data.id} />
			<ScreenShots gameId={data.id} />
		</Box>
	);
};

export default GameDetailPage;
