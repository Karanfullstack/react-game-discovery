import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import { getOptimizedImage } from "../services/image-url";

export default function GenreList() {
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
						<Text fontWeight="bold" fontSize="md">
							{genre.name}
						</Text>
					</HStack>
				</ListItem>
			))}
		</List>
	);
}
