import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useQueryStore from "../store/store";
import { useNavigate } from "react-router-dom";

export default function SearchInput() {
	const ref = useRef<HTMLInputElement>(null);
	const navigation = useNavigate();
	const setSearchText = useQueryStore((s) => s.setSearchText);
	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				if (ref.current) setSearchText(ref.current.value);
				navigation("/");
			}}
		>
			<InputGroup>
				<InputLeftElement children={<BsSearch />} />
				<Input
					ref={ref}
					borderRadius={20}
					placeholder="Search games..."
					variant="filled"
				/>
			</InputGroup>
		</form>
	);
}
