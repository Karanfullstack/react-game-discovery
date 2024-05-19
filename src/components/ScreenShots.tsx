import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenShots from "../hooks/useScreenShots";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LazyLoadingImage from "./LazyLoadingImage";

interface Props {
	gameId: number;
}
export default function ScreenShots({ gameId }: Props) {
	const { data, error, isLoading } = useScreenShots(gameId);
	if (isLoading) return null;
	if (error) throw error;
	return (
		<SimpleGrid columns={{ base: 1, md: 2 }} spacing={2} marginY={5}>
			{data?.results.map((file) => (
				// <Image src={file.image} key={file.id} />
				<LazyLoadingImage image={file.image} alt={file.id + "game"} />
			))}
		</SimpleGrid>
	);
}
