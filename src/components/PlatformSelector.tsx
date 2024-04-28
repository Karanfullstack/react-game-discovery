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
import { Platform } from "../hooks/useGame";

interface Props {
	onSelectedPlatform: (platform: Platform) => void;
	selectedPlatform: Platform | null;
}
export default function PlatformSelector({
	onSelectedPlatform,
	selectedPlatform,
}: Props) {
	const { data, error } = usePlatforms();
	if (error) return null;

	return (
		<Box paddingY={5}>
			<Menu>
				<MenuButton as={Button} rightIcon={<BsChevronDown />}>
					{selectedPlatform?.name || "Platforms"}
				</MenuButton>
				<MenuList>
					{data?.results.map((platform) => (
						<MenuItem
							key={platform.id}
							onClick={() => onSelectedPlatform(platform)}
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
