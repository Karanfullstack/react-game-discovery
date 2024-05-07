import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatforms from "../hooks/usePlatforms";
import useQueryStore from "../store/store";

export default function GameHeading() {
	const genreId = useQueryStore((s) => s.gameQuery.genreId);
	const { data } = useGenre();
	const GenreName = data?.results.find((item) => item.id === genreId);

	// -------------------
	const platformId = useQueryStore((s) => s.gameQuery.platformId);
	const { data: platforms } = usePlatforms();
	const PlatformsName = platforms?.results.find(
		(item) => item.id === platformId
	);
	// all above logic is only for dynamic heading based on user select genre and platform
	const heading = `${PlatformsName?.name || ""} ${GenreName?.name || ""} Games`;
	return (
		<Heading as={"h1"} marginY={5}>
			{heading}
		</Heading>
	);
}
