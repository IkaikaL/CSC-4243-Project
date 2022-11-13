import React from "react";
import { Container, Grid, Typography, Button } from "@mui/material";
type Props = {
	subCategories: Array<string>;
	mainCategory: string;
};

const SubCategories = (props: Props) => {
	const { subCategories, mainCategory } = props;
	return (
		<Container
			sx={{ width: "1000px", backgroundColor: "gray", padding: "10px" }}
		>
			<Typography variant='h5'> In: {mainCategory}</Typography>
			<Grid
				container
				direction='row'
				justifyContent='center'
				alignItems='center'
			>
				{subCategories.map((item) => (
					<Grid item sx={{ width: "200px", height: "100px", padding: "10px" }}>
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

export default SubCategories;
