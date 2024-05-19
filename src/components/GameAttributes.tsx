import { SimpleGrid, Text } from "@chakra-ui/react";
import { type Game } from "../entities/Game";
import CriticsScore from "./CriticsScore";
import DefinationsItems from "./DefinationsItems";

interface Props {
	game: Game;
}
export default function GameAttributes({game}:Props) {
	return (
		<SimpleGrid columns={2} as="dl">
			<DefinationsItems term="Platforms">
				{game?.parent_platforms?.map(({ platform }) => (
					<Text key={platform.id}>{platform.name}</Text>
				))}
			</DefinationsItems>
			<DefinationsItems term="Metascore">
				<CriticsScore score={game?.metacritic} />
			</DefinationsItems>
			<DefinationsItems term="Genre">
				{game?.genres.map((g) => (
					<Text key={g.id}>{g.name}</Text>
				))}
			</DefinationsItems>
			<DefinationsItems term="Publishers">
				{game?.publishers.map((p) => (
					<Text>{p.name}</Text>
				))}
			</DefinationsItems>
		</SimpleGrid>
	);
}
