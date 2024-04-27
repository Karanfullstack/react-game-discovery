import {
	HStack,
	Image,
	List,
	ListItem,
	Spinner,
	Button,
	Heading,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import { getOptimizedImage } from "../services/image-url";

interface Props {
	onSelectedGenre: (genre: Genre) => void;
}
export default function GenreList({ onSelectedGenre }: Props) {
	const { data, isLoading, errors } = useGenre();
	if (errors) return null;
	if (isLoading) return <Spinner />;
	return (
		<>
			<Heading fontSize={"4xl"} marginY={5}>
				Genres
			</Heading>
			<List>
				{data?.map((genre) => (
					<ListItem key={genre.id} paddingY={1.5}>
						<HStack>
							<Image
								objectFit={"cover"}
								boxSize="40px"
								borderRadius={7}
								src={getOptimizedImage(genre.image_background)}
							/>
							<Button
								onClick={() => onSelectedGenre(genre)}
								marginX={1}
								fontSize="md"
								variant="link"
								whiteSpace="normal"
								textAlign={"left"}
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
