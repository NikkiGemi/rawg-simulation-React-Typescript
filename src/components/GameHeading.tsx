import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { platform, genre } = gameQuery;
  const gameHeading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading fontSize="5xl" marginBottom={5} marginLeft={3}>
      {gameHeading}
    </Heading>
  );
};

export default GameHeading;
