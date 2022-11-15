import React from "react";
import { Container, Grid, Typography, Button } from "@mui/material";

const Footer = () => {
	return (
		<Container sx={{ width: "1000px", backgroundColor: "gray" }}>
			<Grid
				container
				direction='row'
				justifyContent='space-evenly'
				alignItems='center'
			>
				<Grid item>
					<a href='https://www.craigslist.org/about/help/'>
						<Button sx={{ width: "200px", color: "black" }}>Help</Button>
					</a>
				</Grid>
				<Grid item>
					<a href='https://www.craigslist.org/about/help/faq'>
						<Button sx={{ width: "200px", color: "black" }}>FAQ</Button>
					</a>
				</Grid>
				<Grid item>
					<a href='https://www.craigslist.org/about/terms.of.use/en'>
						<Button sx={{ width: "200px", color: "black" }}>Legal</Button>
					</a>
				</Grid>
				<Grid item>
					<a href='https://www.craigslist.org/about/privacy.policy'>
						<Button sx={{ width: "200px", color: "black" }}>
							Privacy Policy
						</Button>
					</a>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Footer;
