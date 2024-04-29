import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import Navbar from "./components/Navbar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
	genreId: number | undefined;
	platformId: number | undefined;
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
							onSelectedGenre={(genreId) => setGameQuery({ ...gameQuery, genreId })}
						/>
					</GridItem>
				</Show>
				<GridItem area={"main"} padding={3}>
					<HStack>
						<PlatformSelector
							selectedPlatform={gameQuery.platformId}
							onSelectedPlatform={(platformId) =>
								setGameQuery({ ...gameQuery, platformId })
							}
						/>
						<SortSelector
							selectedOrder={gameQuery.sortOrder}
							onSelectOrders={(sortOrder) =>
								setGameQuery({ ...gameQuery, sortOrder })
							}
						/>
					</HStack>
					<GameHeading gameQuery={gameQuery} />
					<GameGrid gameQuery={gameQuery} />
				</GridItem>
			</Grid>
		</>
	);
}

export default App;
