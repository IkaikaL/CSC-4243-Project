import React, { useEffect, useState } from "react";
import { Grid, Container } from "@mui/material";

import HomePageHeader from "../components/HomePageHeader";
import MainCategories from "../components/MainCategories";
import ListingPageSearchBar from "../components/ListingPageSearchBar";
import ListingPageListings from "../components/ListingPageListings";
import ListingPageChange from "../components/ListingPageChange";

const Listings = () => {
	const [category, setCategory] = useState("");

	return (
		<Container //Contains the whole file i think
			disableGutters={true}
			sx={{ minWidth: "100%", minHeight: "1000px", backgroundColor: "#1E1E1E" }}
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
					<HomePageHeader location='Baton Rouge' />
				</Grid>
				<Grid
					item
					alignItems='center'
					sx={{ width: "100%", height: "100%", backgroundColor: "#1E1E1E", marginBottom:"8px" }}
				>
					<ListingPageSearchBar/>
				</Grid>
				<Grid
					item
					alignItems='center'
					sx={{ width: "100%", height: "100%", backgroundColor: "#1E1E1E", marginBottom:"650px" }}
				>
					<ListingPageListings/>
				</Grid>
				<Grid
					item sx={{ paddingTop: "10px", paddingBottom: "10px" }}>
				
				<ListingPageChange/>	
				</Grid>
				
			</Grid>
			
			
		</Container>
	);
};

export default Listings;