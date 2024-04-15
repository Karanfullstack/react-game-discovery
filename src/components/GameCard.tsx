import { Game } from "../hooks/useGame";
import { Card, CardBody, Heading, HStack, Img } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticsScore from "./CriticsScore";
import { getOptimizedImage } from "../services/image-url";

interface GameProps {
	game: Game;
}
export default function GameCard({ game }: GameProps) {
	return (
		<Card borderRadius="10px" overflow="hidden">
			<Img src={getOptimizedImage(game.background_image)} />
			<CardBody>
				<Heading fontSize="xl">{game.name}</Heading>
				<HStack justifyContent="space-between">
					<PlatformIconList
						platforms={game.parent_platforms.map((p) => p.platform)}
					/>
					<CriticsScore score={game.metacritic} />
				</HStack>
			</CardBody>
		</Card>
	);
}
