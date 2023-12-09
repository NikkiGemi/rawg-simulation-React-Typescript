import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImage from "../services/image-url";

interface Props {
  onSelectedGenre: (selectedGenre: Genre) => void;
}

const GenreList = ({ onSelectedGenre }: Props) => {
  const { data, error, loading } = useGenres();
  if (error) return null;
  return (
    <>
      {loading && <Spinner></Spinner>}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                borderRadius="2px"
                boxSize="32px"
                src={getCroppedImage(genre.image_background)}
              ></Image>
              <Button variant="link" onClick={() => onSelectedGenre(genre)}>
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
