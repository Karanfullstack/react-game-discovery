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
		<Card>
			<Img src={getOptimizedImage(game?.background_image)} />
			<CardBody>
				<HStack justifyContent="space-between" marginBottom={3}>
					<PlatformIconList
						platforms={game?.parent_platforms?.map((p) => p.platform)}
					/>
					<CriticsScore score={game.metacritic} />
				</HStack>
					<Heading fontSize="xl">{game.name}</Heading>
			</CardBody>
		</Card>
	);
}
