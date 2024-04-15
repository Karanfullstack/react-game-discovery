import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export default function GameCardSkeleton() {
	return (
		<Card width="300px" overflow="hidden" borderRadius="10px">
			<Skeleton height="200px" />
			<CardBody>
				<SkeletonText />
			</CardBody>
		</Card>
	);
}
