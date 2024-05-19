import useTrailer from "../hooks/useTrailer";

interface Props {
	gameId: number;
}
export default function GameTrailer({ gameId }: Props) {
	const { data, error, isLoading } = useTrailer(gameId);

	const first = data?.results[0];
	if (isLoading) return null;
	if (error) throw error;
	return first ? (
		<video src={first?.data[480]} poster={first?.preview} />
	) : null;
}
