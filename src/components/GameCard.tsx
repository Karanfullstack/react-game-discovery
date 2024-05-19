import { Card, CardBody, Heading, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { getOptimizedImage } from "../services/image-url";
import CriticsScore from "./CriticsScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";
import { type Game } from "../entities/Game";
import LazyLoadingImage from "./LazyLoadingImage";

interface GameProps {
	game: Game;
}
export default function GameCard({ game }: GameProps) {
	return (
		<Card>
			{/* <Img src={getOptimizedImage(game?.background_image)} /> */}
			<LazyLoadingImage
				image={getOptimizedImage(game?.background_image)}
				alt={game.name}
			/>
			<CardBody>
				<HStack justifyContent="space-between" marginBottom={3}>
					<PlatformIconList
						platforms={game?.parent_platforms?.map((p) => p.platform)}
					/>
					<CriticsScore score={game.metacritic} />
				</HStack>
				<Heading fontSize="xl">
					<Link to={`games/${game.slug}`}>{game.name}</Link>{" "}
					<Emoji rating={game.rating_top} />
				</Heading>
			</CardBody>
		</Card>
	);
}
