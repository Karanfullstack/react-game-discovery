import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
	term: string;
	children: ReactNode | ReactNode[];
}
export default function DefinationsItems({ term, children }: Props) {
	return (
		<Box marginY={5}>
			<Heading as="dt" fontSize="medium" color="gray.600">
				{term}
			</Heading>
			<dd>{children}</dd>
		</Box>
	);
}
