import StarIcon from "@mui/icons-material/Star";
import PersonIcon from "@mui/icons-material/Person";
import { Button, Container, Grid, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
const text = "Customer Reviews";

function SellerInfo(props: any) {
	return (
		<div>
			{props.name} <br /> <br /> User since: {props.date} <br />
		</div>
	);
}

const classes = {
	paper: {
		p: 0.5,
		marginBottom: "10px",
		backgroundColor: "423F3E",
		padding: "10px",
		width: "230px",
	},

	starUpColor: {
		color: "yellow",
	},
};

export default function TotalReviewMenu() {
	return (
		<Paper
			sx={{
				color: "white",
				marginBottom: "10px",
				backgroundColor: "#423F3E",
				padding: "10px",
				width: "230px",
			}}
		>
			<Typography>Customer Reviews</Typography>
			<Grid sx={{ borderBottom: "1.5px solid gray" }}>
				<p style={classes.starUpColor}>
					<StarIcon />
					<StarIcon />
					<StarIcon />
					<StarIcon />
					<StarIcon />
				</p>
				<p className='NumProduct'>Product Ratings</p>
			</Grid>

			<Grid
				sx={{
					borderBottom: "1.5px solid gray",
					paddingBottom: "10px",
					paddingTop: "",
				}}
			>
				<b className='ReviewSeller_title'>Review this seller</b>
				<p>Please share your thoughts with others.</p>

				<Grid style={{ textAlign: "center" }}>
					<Button style={{ background: "lightgray", color: "black" }}>
						Submit a Review
					</Button>
					{/* <p className= 'Submit_Review'> <a href = "/reviewbutton">Submit a Review </a></p> */}
				</Grid>
			</Grid>
			<p className='sellertitle'>Seller Profile</p>
			<Grid
				container
				direction='row'
				style={{
					border: "1px solid grey",
					paddingLeft: "5px",
					paddingBottom: "10px",
					paddingTop: "10px",
				}}
			>
				<Grid
					style={{
						border: "1px solid white",
						height: "50px",
						width: "50px",
						textAlign: "center",
					}}
				>
					<p className='sellerprofileIMG'>
						<PersonIcon />
					</p>
				</Grid>
				<Grid style={{ fontSize: "13px", paddingLeft: "5px" }}>
					<SellerInfo name='Riley47768' date='Oct. 4, 2016' />
				</Grid>
			</Grid>
		</Paper>
	);
}
