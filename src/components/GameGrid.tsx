import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text> {error}</Text>}

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={3} padding={10}>
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
      {!isLoading && data.length === 0 ? (
        <Text padding={10} color="red.500">
          Something's Wrong When Fetching Games! Please Select Another Platform!
        </Text>
      ) : (
        ""
      )}
    </>
  );
};
export default GameGrid;
