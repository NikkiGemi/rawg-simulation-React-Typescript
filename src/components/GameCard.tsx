import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import PlatFormIconList from "./PlatFormIconList";
import CriticScore from "./CriticScore";
import getCroppedImage from "../services/image-url";
import Emoji from "./Emoji";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
      <Image src={getCroppedImage(game.background_image)}></Image>
      <CardBody minHeight="170px">
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatFormIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatFormIconList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
        <Emoji rating={game.rating_top}></Emoji>
      </CardBody>
    </Card>
  );
};

export default GameCard;
