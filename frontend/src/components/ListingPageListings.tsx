import React from "react";
import {
	Container,
	Grid,
	Typography,
	Card,
	Button,
	ButtonBase,
	Box,
	List,
	ListItem,
	ListItemButton,
} from "@mui/material";
import barber from "./Files/barber.jpg";
import lawnMower from "./Files/lawnMower.jpg";
import auto from "./Files/auto.jpg";
import carWash from "./Files/damagedCar.jpg";
import pressWash from "./Files/pressureWash.jpeg";
import nails from "./Files/nails2.jpg";
import clown from "./Files/clown.jpg";
import timEric from "./Files/timEric.jpg";
import lsu from "./Files/lsu.jpg";
import michael from "./Files/michael.jpg";
import { Height } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

type Props = {};

// declare global {
// 	listingNum;
//   }

//   export {};

const Listings = [
	{
		listingTitle: "Bingo's Lawncare Service",
		listingLocation: "Baton Rouge",
		listingDatePosted: "9/24/22",
		image: lawnMower,
	},
	{
		listingTitle: "Billy the Barber",
		listingLocation: "Houma",
		listingDatePosted: "10/15/22",
		image: barber,
	},
	{
		listingTitle: "Mark's Auto Detailing",
		listingLocation: "Central",
		listingDatePosted: "12/18/21",
		image: auto,
	},
	{
		listingTitle: "Joe's Carwash",
		listingLocation: "Dulac",
		listingDatePosted: "08/24/20",
		image: carWash,
	},
	{
		listingTitle: "Lindsey's Pressure Washing",
		listingLocation: "Raceland",
		listingDatePosted: "08/08/08",
		image: pressWash,
	},
	{
		listingTitle: "Sally's Nails",
		listingLocation: "Gonzales",
		listingDatePosted: "05/21/21",
		image: nails,
	},
	{
		listingTitle: "Johnathan the travelling Clown",
		listingLocation: "Denham Springs",
		listingDatePosted: "9/10/21",
		image: clown,
	},
	{
		listingTitle: "Tim and Eric Awesome Show Great Job",
		listingLocation: "Baton Rouge",
		listingDatePosted: "07/25/05",
		image: timEric,
	},
	{
		listingTitle: "Dr.Shah's tutoring services",
		listingLocation: "LSU",
		listingDatePosted: "12/11/21",
		image: lsu,
	},
	{
		listingTitle: "Michael the Massager",
		listingLocation: "Massagetown",
		listingDatePosted: "09/09/21",
		image: michael,
	},
];

// listingNum = Listings.length;

const ListingPageListings = (props: Props) => {
	const navigate = useNavigate();
	return (
		<Container sx={{ width: "1000px" }}>
			<Grid
				container
				direction='row'
				justifyContent='center'
				alignItems='center'
				sx={{ width: "100%", height: "800px" }}
			>
				{Listings.map((listing, index) => (
					<Grid
						item
						xs={6}
						sx={{ width: "500px", height: "150px", padding: "5px" }}
					>
						<Button
							variant='contained'
							sx={{
								width: "100%",
								height: "100%",
								backgroundColor: "grey",
								"&:hover": { backgroundColor: "#5d8c55" },
							}}
							onClick={() => {
								navigate("/listingDetails");
							}}
						>
							{/* I would do a button with a row grid in them and inside the row grid 
						your first cell is gonna be a horizontal grid with 3 items and the s
						econd cell of the row grid will be the image */}
							<Grid item xs={12} container direction='column'>
								<Grid item>
									<Grid
										container
										direction='row'
										justifyContent='center'
										alignItems='center'
										sx={{ width: "100%" }}
									>
										<Grid item xs={8} sx={{ width: "50%" }}>
											<Typography
												textAlign={"start"}
												fontSize={"10"}
												fontWeight={"bold"}
												sx={{
													margin: "1px",
													width: "100%",
												}}
											>
												{listing.listingTitle}
											</Typography>
											<Typography textAlign={"start"} sx={{ margin: "1px" }}>
												{listing.listingLocation}
											</Typography>
											<Typography textAlign={"start"} sx={{ margin: "1px" }}>
												{listing.listingDatePosted}
											</Typography>
										</Grid>
										<Grid item xs={4} sx={{ width: "100%", height: "100%" }}>
											<img
												src={listing.image}
												style={{
													boxSizing: "border-box",
													overflow: "auto",
													position: "static",
													width: "75%",
													height: "75%",
												}}
											/>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Button>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default ListingPageListings;
