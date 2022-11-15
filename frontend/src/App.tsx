import React from "react";
import HomePage from "./pages/HomePage";
import { Container } from "@mui/material";

function App() {
	return (
		<Container
			sx={{ minWidth: "100%", minHeight: "100%" }}
			disableGutters={true}
		>
			<HomePage />
		</Container>
	);
}

export default App;
