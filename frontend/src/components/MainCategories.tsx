import React from "react";
import { Container, Grid, Typography, Card, Button } from "@mui/material";
type Props = {
	categoryList: Array<string>;
};

const MainCategories = (props: Props) => {
	const { categoryList } = props;
	return (
		<Container sx={{ width: "1000px" }}>
			<Grid
				container
				direction='row'
				justifyContent='center'
				alignItems='center'
				sx={{ width: "1000px", height: "500px" }}
			>
				{categoryList.map((item) => (
					<Grid item sx={{ width: "300px", height: "150px", padding: "10px" }}>
						<Button
							variant='contained'
							sx={{
								width: "100%",
								height: "100%",
								backgroundColor: "#5d8c55",
								"&:hover": { backgroundColor: "#5d8c55" },
							}}
							onClick={() => {
								alert("clicked");
							}}
						>
							<Typography textAlign={"center"} sx={{ margin: "60px" }}>
								{item}
							</Typography>
						</Button>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default MainCategories;
