import {
	HStack,
	Image,
	List,
	ListItem,
	Spinner,
	Button,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import { getOptimizedImage } from "../services/image-url";

interface Props {
	onSelectedGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}
export default function GenreList({ selectedGenre, onSelectedGenre }: Props) {
	const { data, isLoading, errors } = useGenre();
	if (errors) return null;
	if (isLoading) return <Spinner />;
	return (
		<List>
			{data?.map((genre) => (
				<ListItem key={genre.id} paddingY={1.5}>
					<HStack>
						<Image
							boxSize="35px"
							borderRadius={7}
							src={getOptimizedImage(genre.image_background)}
						/>
						<Button
							onClick={() => onSelectedGenre(genre)}
							whiteSpace={"nowrap"}
							marginX={1}
							fontSize="lg"
							variant="link"
							fontWeight={genre.id === selectedGenre?.id ? "bold" : ""}
						>
							{genre.name}
						</Button>
					</HStack>
				</ListItem>
			))}
		</List>
	);
}
