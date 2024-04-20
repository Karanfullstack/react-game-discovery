import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

export default function PlatformSelector() {
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				Platfroms
			</MenuButton>
			<MenuList>
				<MenuItem>PC</MenuItem>
				<MenuItem>Xbox</MenuItem>
				<MenuItem>Android</MenuItem>
			</MenuList>
		</Menu>
	);
}
