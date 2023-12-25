import { Heading, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

import { GameQuery } from "../App";
import { useEffect, useState } from "react";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Set the state to show the error message after 2 seconds
      setShowErrorMessage(true);
    }, 2000);

    // Clear the timeout to avoid triggering the error message if the component unmounts before 2 seconds
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures that this effect runs only once after the initial render

  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) <Text> {error}</Text>;

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={6} padding={10}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton></GameCardSkeleton>
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
      {!isLoading && data.length === 0 && showErrorMessage ? (
        <Heading padding={10} color="red.700" fontSize="2xl">
          No Game(s) Found! Please Try Some other filters!
        </Heading>
      ) : (
        ""
      )}
    </>
  );
};
export default GameGrid;
