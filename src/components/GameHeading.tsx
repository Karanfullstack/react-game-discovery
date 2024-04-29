import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
	gameQuery: GameQuery;
}
export default function GameHeading({ gameQuery }: Props) {
	const { data } = useGenre();
	const { data: platforms } = usePlatforms();
	const GenreName = data?.results.find((item) => item.id === gameQuery.genreId);
	const PlatformsName = platforms?.results.find(
		(item) => item.id === gameQuery.platformId
	);
	const heading = `${PlatformsName?.name || ""} ${GenreName?.name || ""} Games`;
	return (
		<Heading as={"h1"} marginY={5}>
			{heading}
		</Heading>
	);
}
