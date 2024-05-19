import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorMode from "./ColorMode";
import SearchInput from "./SearchInput";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
	const navigation = useNavigate();
	return (
		<HStack padding="15px">
			<Image
				cursor="pointer"
				onClick={() => navigation("/")}
				src={logo}
				boxSize="60px"
			/>
			<SearchInput />
			<ColorMode />
		</HStack>
	);
}
