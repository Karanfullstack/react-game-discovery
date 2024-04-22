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
}
export default function GenreList({ onSelectedGenre }: Props) {
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
							marginX={1}
							fontSize="md"
							variant="link"
							whiteSpace="normal"
						>
							{genre.name}
						</Button>
					</HStack>
				</ListItem>
			))}
		</List>
	);
}
