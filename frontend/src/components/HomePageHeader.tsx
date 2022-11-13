import React from "react";
import { Container, Grid, Typography, Button } from "@mui/material";
type Props = {
	location: string;
};

const HomePageHeader = (props: Props) => {
	const { location } = props;
	return (
		<Container
			sx={{
				height: "60px",
				width: "1000px",
				padding: "10px",
			}}
		>
			<Grid
				container
				direction='row'
				justifyContent='space-around'
				alignItems='center'
				sx={{ height: "100%" }}
			>
				<Grid item sx={{ width: "100px" }}>
					<Button
						variant='contained'
						sx={{
							backgroundColor: "#5d8c55",
							"&:hover": { backgroundColor: "#5d8c55" },
						}}
						onClick={() => {
							alert("clicked");
						}}
					>
						<Typography>Calendar</Typography>
					</Button>
				</Grid>
				<Grid
					item
					sx={{
						width: "600px",
						height: "100%",
						padding: "8px",
						backgroundColor: "gray",
					}}
				>
					<Typography textAlign={"center"}>{location}</Typography>
				</Grid>
			</Grid>
		</Container>
	);
};

export default HomePageHeader;
