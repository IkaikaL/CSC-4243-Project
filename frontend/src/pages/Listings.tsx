import React, { useEffect, useState } from "react";
import { Grid, Container, createTheme, ThemeProvider } from "@mui/material";

import GlobalHeader from "../components/GlobalHeader";
import ListingPageSearchBar from "../components/ListingPageSearchBar";
import ListingPageListings from "../components/ListingPageListings";
import ListingPageChange from "../components/ListingPageChange";
const theme = createTheme({
	palette: {
		primary: {
			main: "#ffffff",
		},
	},
});
const Listings = () => {
	const [category, setCategory] = useState("");

	return (
		<ThemeProvider theme={theme}>
			<Container 
				disableGutters={true}
				sx={{
					minWidth: "100%",
					minHeight: "1000px",
					backgroundColor: "#1E1E1E",
				}}
			>
				<Grid
					container
					direction='column'
					alignItems='center'
					justifyContent='center'
					sx={{ width: "100%", height: "150%", backgroundColor: "#1E1E1E" }}
				>
					<Grid
						item
						direction='column'
						alignItems='center'
						justifyContent='center'
						sx={{ width: "100%", height: "100%", backgroundColor: "#1E1E1E" }}
					>
						<GlobalHeader isListingList={true} />
					</Grid>
					<Grid
						item
						alignItems='center'
						sx={{ width: "100%", height: "100%", backgroundColor: "#1E1E1E" }}
					>
						<ListingPageListings />
					</Grid>
				</Grid>
			</Container>
		</ThemeProvider>
	);
};

export default Listings;
