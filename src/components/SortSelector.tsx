import {
	Box,
	Button,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

export default function SortSelector() {
	return (
		<Box paddingY={5}>
			<Menu>
				<MenuButton as={Button} rightIcon={<BsChevronDown />}>
					Relevance
				</MenuButton>
				<MenuList>
					<MenuItem>Date added</MenuItem>
					<MenuItem>Name</MenuItem>
					<MenuItem>Release Date</MenuItem>
					<MenuItem>Popularity</MenuItem>
					<MenuItem>Average rating</MenuItem>
				</MenuList>
			</Menu>
		</Box>
	);
}
