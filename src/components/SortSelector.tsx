import {
	Box,
	Button,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
	onSelectOrders: (sortorders: string) => void;
	selectedOrder: string | null;
}
export default function SortSelector({ onSelectOrders, selectedOrder }: Props) {
	const sortOrderes = [
		{ value: "", label: "Relevance" },
		{ value: "-added", label: "Date added" },
		{ value: "name", label: "Name" },
		{ value: "-released", label: "Release Date" },
		{ value: "-metacritic", label: "Popularity" },
		{ value: "rating", label: "Aaverage rating" },
	];

	const currentOrder = sortOrderes.find(
		(order) => order.value === selectedOrder
	);
	return (
		<Box paddingY={5}>
			<Menu>
				<MenuButton as={Button} rightIcon={<BsChevronDown />}>
					{"Order By " + currentOrder?.label || "Relevance"}
				</MenuButton>
				<MenuList>
					{sortOrderes.map((sortorder) => (
						<MenuItem
							onClick={() => onSelectOrders(sortorder.value)}
							key={sortorder.value}
							value={sortorder.value}
						>
							{sortorder.label}
						</MenuItem>
					))}
				</MenuList>
			</Menu>
		</Box>
	);
}
