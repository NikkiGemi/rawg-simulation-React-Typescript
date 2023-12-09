import {
  FaWindows,
  FaLinux,
  FaXbox,
  FaPlaystation,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Text } from "@chakra-ui/react";
import { Platform } from "../hooks/useGame";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatFormIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    linux: FaLinux,
    android: FaAndroid,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    web: BsGlobe,
    ios: MdPhone,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Text
          as={iconMap[platform.slug]}
          key={platform.id}
          color="gray.500"
        ></Text>
      ))}
    </HStack>
  );
};

export default PlatFormIconList;
