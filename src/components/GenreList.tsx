import {
	Button,
	Heading,
	HStack,
	Image,
	List,
	ListItem,
	Spinner,
} from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import { getOptimizedImage } from "../services/image-url";
import useQueryStore from "../store/store";

export default function GenreList() {
	const { data, isLoading, error } = useGenre();
	const setGenreId = useQueryStore((s) => s.setGenreId);
	const selectedGenre = useQueryStore(s=> s.gameQuery.genreId)

	if (error) return null;
	if (isLoading) return <Spinner />;
	return (
		<>
			<Heading fontSize={"4xl"} marginY={5}>
				Genres
			</Heading>
			<List>
				{data?.results.map((genre) => (
					<ListItem key={genre.id} paddingY={1.5}>
						<HStack>
							<Image
								objectFit={"cover"}
								boxSize="40px"
								borderRadius={7}
								src={getOptimizedImage(genre.image_background)}
							/>
							<Button
								onClick={() => setGenreId(genre.id)}
								marginX={1}
								fontSize="md"
								variant="link"
								whiteSpace="normal"
								textAlign={"left"}
								fontWeight={`${selectedGenre === genre.id ? "bold" : "normal"}`}
							>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
}
