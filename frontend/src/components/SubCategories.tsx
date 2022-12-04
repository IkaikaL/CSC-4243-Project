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
				padding: "10px",
				color: "white",
			}}
		>
			<Grid
				container
				direction='row'
				justifyContent='center'
				alignItems='center'
			>
				{subCategory !== undefined ? (
					subCategory.map((item) => (
						<Grid item sx={{ width: "155px", height: "80px", padding: "10px" }}>
							<Button
								variant='contained'
								sx={{
									color: "white",
									width: "100%",
									height: "100%",
									backgroundColor: "#423F3E",
									"&:hover": { backgroundColor: "#362222" },
								}}
								onClick={() => {
									navigate("/listings");
								}}
							>
								<Typography textAlign={"center"} sx={{ fontSize: "15px" }}>
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
