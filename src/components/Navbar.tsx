import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorMode from "./ColorMode";
import SearchInput from "./SearchInput";
interface SearchProps {
	onSearch:(searchText:string)=> void
}
export default function Navbar({onSearch}:SearchProps) {
	return (
		<HStack padding="15px">
			<Image src={logo} boxSize="60px" />
			<SearchInput onSearch={onSearch} />
			<ColorMode />
		</HStack>
	);
}
