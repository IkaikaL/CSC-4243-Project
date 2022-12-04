import React, { useState } from "react";
import { Container, Grid, Typography, Card, Button } from "@mui/material";
type Props = {
	categoryList: Array<string>;
	setCategory: React.Dispatch<React.SetStateAction<string>>;
};

const MainCategories = (props: Props) => {
	const { categoryList, setCategory } = props;
	const [selected, setSelected] = useState("");
	return (
		<Container sx={{ width: "1000px" }}>
			<Grid
				container
				direction='row'
				justifyContent='center'
				alignItems='center'
				sx={{ width: "100%", height: "250px" }}
			>
				{categoryList.map((item) => (
					<Grid item sx={{ width: "200px", height: "100px", padding: "5px" }}>
						<Button
							variant='contained'
							sx={{
								color: "white",
								width: "100%",
								height: "100%",
								backgroundColor: selected === item ? "#362222" : "#423F3E",
								"&:hover": { backgroundColor: "#362222" },
							}}
							onClick={() => {
								setCategory(item);
								setSelected(item);
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
