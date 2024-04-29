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

interface Props {
	onSelectedPlatform: (platform: number | undefined) => void;
	selectedPlatform: number | undefined;
}
export default function PlatformSelector({
	onSelectedPlatform,
	selectedPlatform,
}: Props) {
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
							onClick={() => onSelectedPlatform(platform.id)}
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
