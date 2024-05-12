import { Heading, Text, Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
	const error = useRouteError();

	return (
		<>
			<Navbar />
			<Flex
				marginY={4}
				gap={3}
				padding={5}
				justifyContent="center"
				alignItems="center"
				flexDir="column"
			>
				<Heading>Opps</Heading>
				<Text fontSize={24}>
					{isRouteErrorResponse(error)
						? "This page doesn't exist."
						: "An expected error occured"}
				</Text>
			</Flex>
		</>
	);
};

export default ErrorPage;
