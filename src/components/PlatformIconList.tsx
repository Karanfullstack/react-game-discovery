import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import {
	FaAndroid,
	FaApple,
	FaLinux,
	FaPlaystation,
	FaWindows,
	FaXbox,
} from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { Platform } from "../hooks/usePlatforms";

interface PlatformIcon {
	platforms: Platform[];
}
export default function PlatformIconList({ platforms }: PlatformIcon) {
	const iconMap: { [key: string]: IconType } = {
		pc: FaWindows,
		playstation: FaPlaystation,
		xbox: FaXbox,
		nintendo: SiNintendo,
		mac: FaApple,
		linux: FaLinux,
		android: FaAndroid,
		ios: MdPhone,
		web: BsGlobe,
	};
	return (
		<HStack marginTop={3}>
			{platforms?.map((platform) => (
				<Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
			))}
		</HStack>
	);
}
