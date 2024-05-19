import { Box, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Expandable from "../components/Expandable";
import useGameDetail from "../hooks/useGameDetail";

const GameDetailPage = () => {
	const { slug } = useParams();
	const { data, isLoading, error } = useGameDetail(slug!);

	if (isLoading) return <Spinner />;
	if (error || !data) throw error;

	return (
		<Box padding={5}>
			<Heading>{data?.name}</Heading>
			<Expandable children={data.description_raw} />
		</Box>
	);
};

// TODO: FIRST COMPLETE THIS EXCERCISE BUILDING EXPANDABLE TEXT

export default GameDetailPage;
