import meh from "../assets/Emojis/meh.webp";
import thumbsup from "../assets/Emojis/thumbs-up.webp";
import bullsEye from "../assets/Emojis/bulls-eye.webp";
import { ImageProps, Img } from "@chakra-ui/react";
interface Props {
	rating: number;
}
export default function Emoji({ rating }: Props) {
	const emojiMap: { [key: number]: ImageProps } = {
		3: { src: meh, alt: "meh", boxSize: "25px" },
		4: { src: thumbsup, alt: "thumbs-up", boxSize: "25px" },
		5: { src: bullsEye, alt: "bulls-eye", boxSize: "35px" },
	};
	return <Img {...emojiMap[rating]} />;
}
