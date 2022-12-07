import React from "react";
import ListingPageListings, { listingNum } from "./ListingPageListings";
import { Container, Grid, Typography, Button } from "@mui/material";


const Footer = () => {
	return (
		<Container sx={{ width: "1000px", backgroundColor: "#1E1E1E" }}>
			<Grid
				container
				direction='row'
				justifyContent='space-evenly'
				alignItems='center'
			>
				<Grid item>
					
						<Button variant="contained" component="label" sx={{ width: "100px", height:"65px", color: "white", background:"#423F3E", "&:hover": { background: "#362222" } , fontWeight:"bold" }} 
                        onClick={() => {
								alert("clicked");
							}}>First</Button>
					
				</Grid>
				<Grid item>
					
						<Button variant="contained" sx={{ width: "100px", height:"65px", color: "white", background:"#423F3E", "&:hover": { background: "#362222" } , fontWeight:"bold" }}
                        onClick={() => {
                            alert("clicked");
                        }}>Prev</Button>
					
				</Grid>
				<Grid item>
					
						<Button variant="contained" sx={{ width: "200px", height:"65px", color: "white", background:"#423F3E", "&:hover": { background: "#362222" } , fontWeight:"bold" }}
                        onClick={() => {
                            alert("clicked");
                        }}>yes</Button>
					
				</Grid>
				<Grid item>
					
						<Button variant="contained" sx={{ width: "100px", height:"65px", color: "white", background:"#423F3E", "&:hover": { background: "#362222" } , fontWeight:"bold" }}
                        onClick={() => {
                            alert("clicked");
                        }}>
							Next
						</Button>
					
				</Grid>
                <Grid item>
					
						<Button variant="contained" sx={{ width: "100px", height:"65px", color: "white", background:"#423F3E", "&:hover": { background: "#362222" } , fontWeight:"bold" }}
                        onClick={() => {
                            alert("clicked");
                        }}>
							Last
						</Button>
					
				</Grid>
			</Grid>
		</Container>
	);
};

export default Footer;