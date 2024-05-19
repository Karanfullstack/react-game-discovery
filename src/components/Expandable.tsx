import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";
interface ExpandableProps {
	children: string;
}
const Expandable = ({ children }: ExpandableProps) => {
	const [isExpanded, SetisExpanded] = useState(false);

	if (!children) return null;
	const description = isExpanded
		? children
		: children.substring(0, 200) + "...";
	return (
		<>
			<Text>
				{description}{" "}
				<Button
					colorScheme="yellow"
					size="xs"
					fontWeight="bold"
					onClick={() => SetisExpanded(!isExpanded)}
				>
					{isExpanded ? "show less" : "show more"}
				</Button>
			</Text>
		</>
	);
};

export default Expandable;
