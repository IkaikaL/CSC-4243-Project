import React from "react";
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
					<a href="">
						<Button variant="contained" sx={{ width: "100px", height:"65px", color: "black", background:"#5d8c55", "&:hover": { background: "#73a767" } , fontWeight:"bold" }}>First</Button>
					</a>
				</Grid>
				<Grid item>
					<a href=''>
						<Button variant="contained" sx={{ width: "100px", height:"65px", color: "black", background:"#5d8c55", "&:hover": { background: "#73a767" } , fontWeight:"bold" }}>Prev</Button>
					</a>
				</Grid>
				<Grid item>
					<a href=''>
						<Button variant="contained" sx={{ width: "200px", height:"65px", color: "black", background:"#5d8c55", "&:hover": { background: "#73a767" } , fontWeight:"bold" }}>1-8 of 8</Button>
					</a>
				</Grid>
				<Grid item>
					<a href=''>
						<Button variant="contained" sx={{ width: "100px", height:"65px", color: "black", background:"#5d8c55", "&:hover": { background: "#73a767" } , fontWeight:"bold" }}>
							Next
						</Button>
					</a>
				</Grid>
                <Grid item>
					<a href=''>
						<Button variant="contained" sx={{ width: "100px", height:"65px", color: "black", background:"#5d8c55", "&:hover": { background: "#73a767" } , fontWeight:"bold" }}>
							Last
						</Button>
					</a>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Footer;