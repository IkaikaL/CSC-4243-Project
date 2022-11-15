import React from "react";
import { Container, Grid, TextField, Typography, Button, styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const CssTextField = styled(TextField)({
	'& label.Mui-focused': {
	  color: 'green',
	},
	'& .MuiInput-underline:after': {
	  borderBottomColor: 'green',
	},
	'& .MuiOutlinedInput-root': {
	  '& fieldset': {
		borderColor: 'gray',
	  },
	  '&:hover fieldset': {
		borderColor: 'green',
	  },
	  '&.Mui-focused fieldset': {
		borderColor: 'green',
	  },
	},
  });

const ListingPageSearchBar = () => {
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
				sx={{ height: "110%" }}
			>
				<Grid
					item
					sx={{
						width: "800px",
						height: "100%",
						padding: "8px",
						marginTop: "-47px",
						backgroundColor: "gray",
					}}
				>
					<CssTextField size="small" id="listings-search" variant="standard" fullWidth  color="primary"/>
				</Grid>
				<Grid item sx={{ width: "100px" , height: "200%"}}>
					<Button
						variant='contained'
						sx={{
							direction:'row', alignItems:'center', backgroundColor: "#5d8c55",
							"&:hover": { backgroundColor: "#73a767" },
						}}
						onClick={() => {
							alert("clicked");
						}}
					>
						<Typography>Search</Typography>
					</Button>
				</Grid>
			</Grid>
		</Container>
	);
};

export default ListingPageSearchBar;
