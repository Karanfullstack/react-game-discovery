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
import useQueryStore from "../store/store";

export default function PlatformSelector() {
	const setPlatformId = useQueryStore(s=> s.setPlatformId)
	const selectedPlatform = useQueryStore(s=> s.gameQuery.platformId)
	const { data, error } = usePlatforms();
	
	if (error) return null;
	const SelectedNamePlatform = data?.results.find(
		(item) => item.id === selectedPlatform
	);
	return (
		<Box paddingY={5}>
			<Menu>
				<MenuButton as={Button} rightIcon={<BsChevronDown />}>
					{SelectedNamePlatform?.name || "Platforms"}
				</MenuButton>
				<MenuList>
					{data?.results.map((platform) => (
						<MenuItem
							key={platform.id}
							onClick={() => setPlatformId(platform.id)}
							value={platform.slug}
						>
							{platform.name}
						</MenuItem>
					))}
				</MenuList>
			</Menu>
		</Box>
	);
}
