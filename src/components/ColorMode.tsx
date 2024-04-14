import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

export default function ColorMode() {
	const { toggleColorMode, colorMode } = useColorMode();
	return (
		<HStack>
			<Switch
				size="md"
				colorScheme="green"
				isChecked={colorMode === "dark"}
				onChange={toggleColorMode}
			/>
			<Text>{colorMode === "dark" ? "Dark Mode" : "Ligt Mode"}</Text>
		</HStack>
	);
}
