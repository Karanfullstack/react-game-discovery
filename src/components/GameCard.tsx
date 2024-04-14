import { Game } from "../hooks/useGame";
import { Card, CardBody, Heading, Img } from "@chakra-ui/react";

interface GameProps {
	game: Game;
}
export default function GameCard({ game }: GameProps) {
	return (
		<Card borderRadius="10px" overflow="hidden">
			<Img src={game.background_image} />
			<CardBody>
				<Heading fontSize="xl">{game.name}</Heading>
			</CardBody>
		</Card>
	);
}
