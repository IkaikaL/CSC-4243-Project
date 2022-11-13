import React from "react";
import { Container, Grid, Typography, Card, Button } from "@mui/material";
type Props = {
	categoryList: Array<string>;
	setCategory: React.Dispatch<React.SetStateAction<string>>;
};

const MainCategories = (props: Props) => {
	const { categoryList, setCategory } = props;
	return (
		<Container sx={{ width: "1000px" }}>
			<Grid
				container
				direction='row'
				justifyContent='center'
				alignItems='center'
				sx={{ width: "100%", height: "500px" }}
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
								setCategory(item);
							}}
						>
							<Typography textAlign={"center"} sx={{}}>
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
