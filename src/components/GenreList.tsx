import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImage from "../services/image-url";

const GenreList = () => {
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
              <Text>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
