import { Image, ImageProps } from "@chakra-ui/react";
import thumbsUp from "../assets/thumbs-up.webp";
import bullsEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "thumbsUp", boxSize: "25px" },
    5: { src: bullsEye, alt: "bullsEye", boxSize: "25px" },
  };
  return <Image marginTop={3} {...emojiMap[rating]} />;
};

export default Emoji;
