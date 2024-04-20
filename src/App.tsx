import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGame";

function App() {
	const [selectGenre, setSelectedGenre] = useState<Genre | null>(null);
	const [selectPlatform, setSelectedPlatform] = useState<Platform | null>(null);

	console.log(selectPlatform);
	return (
		<>
			<Grid
				templateAreas={{
					base: `"nav" "main"`,
					lg: `"nav nav" "aside main"`,
				}}
				templateColumns={{
					base: "1fr",
					lg: "200px 1fr",
				}}
			>
				<GridItem area={"nav"}>
					<Navbar />
				</GridItem>
				<Show above="lg">
					<GridItem paddingX={5} area={"aside"}>
						<GenreList onSelectedGenre={(genre) => setSelectedGenre(genre)} />
					</GridItem>
				</Show>
				<GridItem area={"main"} padding={3}>
					<PlatformSelector
					selectedPlatform={selectPlatform}
						onSelectedPlatform={(platform) => setSelectedPlatform(platform)}
					/>
					<GameGrid selectedGenre={selectGenre} selectedPlatform={selectPlatform} />
				</GridItem>
			</Grid>
		</>
	);
}

export default App;
