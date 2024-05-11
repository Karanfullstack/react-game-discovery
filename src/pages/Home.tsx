import { Grid, Show, GridItem, HStack } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const Home = () => {
	return (
		<>
			<Grid
				templateAreas={{
					base: `"main"`,
					lg: `"aside main"`,
				}}
				templateColumns={{
					base: "1fr",
					lg: "200px 1fr",
				}}
			>
				<Show above="lg">
					<GridItem paddingX={5} area={"aside"}>
						<GenreList />
					</GridItem>
				</Show>
				<GridItem area={"main"} padding={3}>
					<HStack>
						<PlatformSelector />
						<SortSelector />
					</HStack>
					<GameHeading />
					<GameGrid />
				</GridItem>
			</Grid>
		</>
	);
};

export default Home;
