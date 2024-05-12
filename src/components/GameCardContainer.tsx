import { Box } from "@chakra-ui/react";
import { type ReactNode } from "react";

interface Props {
	children: ReactNode;
}
export default function GameCardContainer({ children }: Props) {
	return (
		<Box
			_hover={{
				transform: "scale(1.03)",
				transition: "transform 0.15s ease-in",
			}}
			borderRadius="10px"
			overflow="hidden"
		>
			{children}
		</Box>
	);
}
