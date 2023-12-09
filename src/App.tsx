import "./App.css";
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGame";
import SortSelector, { Sort } from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sort: Sort | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
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
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5} width="200px">
          <GenreList
            selectedGenre={gameQuery?.genre}
            onSelectedGenre={(genre: Genre) =>
              setGameQuery({ ...gameQuery, genre })
            }
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack spacing={5} paddingLeft={3} marginBottom={5}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onPlatformChange={(platform: Platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          ></PlatformSelector>
          <SortSelector
            sort={gameQuery.sort}
            onSort={(sort: Sort) => setGameQuery({ ...gameQuery, sort })}
          ></SortSelector>
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
