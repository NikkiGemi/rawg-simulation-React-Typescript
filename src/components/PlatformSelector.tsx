import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGame";

interface Props {
  onPlatformChange: (selectedPlatform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onPlatformChange, selectedPlatform }: Props) => {
  const { data } = usePlatforms();

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>

      <MenuList>
        {data.map((item) => (
          <MenuItem key={item.id} onClick={() => onPlatformChange(item)}>
            {item.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
