import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

export interface Sort {
  value: string | null;
  label: string | null;
}

interface Props {
  onSort: (sort: Sort) => void;
  sort: Sort | null;
}

const SortSelector = ({ onSort, sort }: Props) => {
  const data: Sort[] = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {sort?.value ? sort.label : "Order by: Relevance"}
      </MenuButton>

      <MenuList>
        {data.map((item) => (
          <MenuItem key={item.value} onClick={() => onSort(item)}>
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
