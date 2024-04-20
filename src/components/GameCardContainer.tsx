import { Box } from "@chakra-ui/react";
import { type ReactNode } from "react";

interface Props {
	children: ReactNode;
}
export default function GameCardContainer({ children }: Props) {
	return (
		<Box width="250px" borderRadius="10px" overflow="hidden">
			{children}
		</Box>
	);
}
