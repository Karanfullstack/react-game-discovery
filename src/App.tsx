import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGame";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
	sortOrder: string | null;
	searchText: string | null;
}
function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
					<Navbar
						onSearch={(searchText) =>
							setGameQuery({ ...gameQuery, searchText })
						}
					/>
				</GridItem>
				<Show above="lg">
					<GridItem paddingX={5} area={"aside"}>
						<GenreList
							onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
						/>
					</GridItem>
				</Show>
				<GridItem area={"main"} padding={3}>
					<HStack>
						<PlatformSelector
							selectedPlatform={gameQuery.platform}
							onSelectedPlatform={(platform) =>
								setGameQuery({ ...gameQuery, platform })
							}
						/>
						<SortSelector
							selectedOrder={gameQuery.sortOrder}
							onSelectOrders={(sortOrder) =>
								setGameQuery({ ...gameQuery, sortOrder })
							}
						/>
					</HStack>
					<GameGrid gameQuery={gameQuery} />
				</GridItem>
			</Grid>
		</>
	);
}

export default App;
