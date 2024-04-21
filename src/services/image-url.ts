import FallbackImage from "../assets/no-image-placeholder-6f3882e0.webp"

export const getOptimizedImage = (url: string | null) => {
	if (!url) return FallbackImage;
	const target = "media/";
	const index = url.indexOf(target) + target.length;
	return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};
