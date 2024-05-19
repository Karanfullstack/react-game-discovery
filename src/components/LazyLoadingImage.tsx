import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface Props {
	image: string;
	alt: string;
}
export default function LazyLoadingImage({ image, alt }: Props) {
	return <LazyLoadImage effect="blur" alt={alt} src={image} />;
}
