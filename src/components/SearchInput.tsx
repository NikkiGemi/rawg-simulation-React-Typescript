import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsFillSearchHeartFill, BsSearch } from "react-icons/bs";

export const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />}></InputLeftElement>
      <Input
        borderRadius={20}
        variant={"filled"}
        placeholder="Search games..."
      />
    </InputGroup>
  );
};
