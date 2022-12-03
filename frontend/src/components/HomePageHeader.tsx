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
				paddingTop: "10px",
				paddingBottom: "10px",
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
					<a href='https://batonrouge.craigslist.org/search/eee#search=1~list~0~0'>
						<Button
							variant='contained'
							sx={{
								color: "white",
								backgroundColor: "#423F3E",
								"&:hover": { backgroundColor: "#362222" },
							}}
						>
							<Typography>Calendar</Typography>
						</Button>
					</a>
				</Grid>
				<Grid
					item
					sx={{
						width: "600px",
						height: "100%",
						padding: "8px",
						backgroundColor: "#423F3E",
						color: "white",
					}}
				>
					<Typography textAlign={"center"}>{location}</Typography>
				</Grid>
			</Grid>
		</Container>
	);
};

export default HomePageHeader;
