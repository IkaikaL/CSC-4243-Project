import React from "react";
import HomePageHeader from "./components/HomePageHeader";
import { Container, Grid } from "@mui/material";

function App() {
	return (
		<Container>
			<Grid
				container
				direction='column'
				justifyContent='center'
				alignItems='center'
			>
				<Grid item sx={{ width: "100%" }}>
					<HomePageHeader location='Baton Rouge' />
				</Grid>
			</Grid>
		</Container>
	);
}

export default App;
