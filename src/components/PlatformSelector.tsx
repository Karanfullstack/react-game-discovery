import {
	Box,
	Button,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

export default function PlatformSelector() {
	const { data, errors } = usePlatforms();
	if (errors) return null;
	console.log(data);
	return (
		<Box paddingY={5}>
			<Menu>
				<MenuButton as={Button} rightIcon={<BsChevronDown />}>
					Platfroms
				</MenuButton>
				<MenuList>
					{data?.map((platform) => (
						<MenuItem value={platform.slug}>{platform.name}</MenuItem>
					))}
				</MenuList>
			</Menu>
		</Box>
	);
}
