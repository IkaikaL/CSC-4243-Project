import React from "react";
import { Container, Grid, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
type Props = {
	mainCategory: string;
	subCategory?: string[];
};

const SubCategories = (props: Props) => {
	const { mainCategory, subCategory } = props;
	const navigate = useNavigate();
	return (
		<Container
			sx={{
				width: "1000px",
				minHeight: "100px",
				backgroundColor: "gray",
				padding: "10px",
			}}
		>
			<Typography variant='h5'> In: {mainCategory}</Typography>
			<Grid
				container
				direction='row'
				justifyContent='center'
				alignItems='center'
			>
				{subCategory !== undefined ? (
					subCategory.map((item) => (
						<Grid item sx={{ width: "200px", height: "80px", padding: "10px" }}>
							<Button
								variant='contained'
								sx={{
									width: "100%",
									height: "100%",
									backgroundColor: "#5d8c55",
									"&:hover": { backgroundColor: "#5d8c55" },
								}}
								onClick={() => {
									navigate("/listings");
								}}
							>
								<Typography textAlign={"center"} sx={{}}>
									{item}
								</Typography>
							</Button>
						</Grid>
					))
				) : (
					<Typography>
						There is currently no directories for this category
					</Typography>
				)}
			</Grid>
		</Container>
	);
};

export default SubCategories;
