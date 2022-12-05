import React from "react";
import { useNavigate } from "react-router-dom";
import {
	Container,
	Grid,
	Typography,
	Button,
	TextField,
	Box,
} from "@mui/material";
import logo from "./Files/KC- K.png";

type Props = {
	isListingList: boolean;
};

const GlobalHeader = (props: Props) => {
	const { isListingList } = props;
	const navigate = useNavigate();
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
				justifyContent={isListingList ? "space-around" : "flex-start"}
				alignItems='center'
				sx={{ height: "100%" }}
			>
				<Grid item sx={{ width: "50px" }}>
					<Box
						component='img'
						sx={{ height: "40px", width: "40px" }}
						alt='logo'
						src={logo}
						onClick={() => {
							navigate("/");
						}}
					/>
				</Grid>
				<Grid item sx={{ width: "110px" }}>
					<Typography sx={{ color: "white" }}> KevinsCatalog</Typography>
				</Grid>
				<Grid item sx={{ paddingLeft: isListingList ? "none" : "665px" }}>
					<a href='https://post.craigslist.org/k/MhndxVRz7RGL4TPzqQVWcA/rqgID?s=type'>
						<Button variant='outlined'>Create Post</Button>
					</a>
				</Grid>
				{isListingList ? (
					<>
						<Grid
							item
							sx={{
								width: "300px",
								color: "white",
							}}
						>
							<TextField
								id='outlined-basic'
								label='Search'
								size='small'
								color='primary'
								sx={{
									input: { color: "white" },
									width: "300px",
									"& .MuiInputLabel-root": { color: "white" },
									"& .MuiOutlinedInput-root": {
										"& > fieldset": { borderColor: "white", color: "white" },
									},
								}}
							></TextField>
						</Grid>
						<Grid item>
							<Button
								variant='outlined'
								sx={{
									color: "white",
								}}
							>
								Search
							</Button>
						</Grid>
					</>
				) : null}
			</Grid>
		</Container>
	);
};

export default GlobalHeader;
