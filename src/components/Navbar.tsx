import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorMode from "./ColorMode";
import SearchInput from "./SearchInput";

export default function Navbar() {
	return (
		<HStack padding="15px">
			<Image src={logo} boxSize="60px" />
			<SearchInput />
			<ColorMode />
		</HStack>
	);
}
