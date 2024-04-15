import { Badge } from "@chakra-ui/react";

interface Props {
	score: number;
}
export default function CriticsScore({ score }: Props) {
	const color = score > 70 ? "green" : score > 50 ? "red" : "";
	return (
		<Badge borderRadius={5} colorScheme={color} paddingX={3} fontSize={18}>
			{score}
		</Badge>
	);
}
