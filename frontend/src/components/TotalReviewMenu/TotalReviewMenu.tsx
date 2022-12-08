import StarIcon from "@mui/icons-material/Star";
import PersonIcon from "@mui/icons-material/Person";
import dayjs, { Dayjs } from "dayjs";
import {
	Button,
	Container,
	Dialog,
	DialogContent,
	DialogTitle,
	FormControl,
	Grid,
	MenuItem,
	Popover,
	Select,
	TextField,
	Typography,
	InputLabel,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CompleteReviewPage from "../../pages/CompleteReviewPage";
import Reviews from "../Reviews/Reviews";

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
	const [open, setOpen] = useState(false);
	const [messageValue, setMessageValue] = useState("");
	const [stars, setStars] = useState(0);
	const [date, setDate] = useState("");
	const [usernameValue, setUsernameValue] = useState("");
	const [verified, setVerified] = useState(0);

	const openReviewSubmission = () => {
		setOpen(true);
	};

	const closeReviewSubmission = () => {
		setOpen(false);
	};

	const changeMessageValue = (data: string) => {
		setMessageValue(data);
	};
	const changeUsernameValue = (data: string) => {
		setUsernameValue(data);
	};
	const changeStarValue = (data: number) => {
		setStars(data);
	};
	const changeVerifiedValue = (data: number) => {
		setVerified(data);
	};
	const changeDate = (value: string) => {
		setDate(value);
	};

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
					<Button
						style={{ background: "lightgray", color: "black" }}
						onClick={openReviewSubmission}
					>
						Submit a Review
					</Button>
					<Dialog
						open={open}
						onClose={closeReviewSubmission}
						sx={{ backgroundColor: "" }}
					>
						<DialogTitle sx={{ backgroundColor: "#1E1E1E", color: "white" }}>
							Seller Review
						</DialogTitle>
						<DialogContent sx={{ backgroundColor: "#1E1E1E", color: "white" }}>
							<Grid
								container
								direction='column'
								justifyContent='center'
								alignItems='center'
								sx={{ paddingTop: "10px" }}
							>
								<Grid
									item
									sx={{
										paddingBottom: "10px",
										width: "300px",
									}}
								>
									<FormControl fullWidth size='small'>
										<InputLabel sx={{ color: "white" }}>Stars</InputLabel>
										<Select
											value={stars}
											label='Stars'
											onChange={(value) =>
												changeStarValue(value.target.value as number)
											}
											sx={{
												color: "white",
												".MuiOutlinedInput-notchedOutline": {
													borderColor: "white",
												},
												"&:hover .MuiOutlinedInput-notchedOutline": {
													borderColor: "white",
												},
												"& .MuiSvgIcon-root": {
													color: "white",
												},
											}}
										>
											<MenuItem value={1}>One</MenuItem>
											<MenuItem value={2}>Two</MenuItem>
											<MenuItem value={3}>Three</MenuItem>
											<MenuItem value={4}>Four</MenuItem>
											<MenuItem value={5}>Five</MenuItem>
										</Select>
									</FormControl>
								</Grid>
								<Grid item sx={{ paddingBottom: "10px", width: "300px" }}>
									<TextField
										label='Username'
										fullWidth
										value={usernameValue}
										onChange={(value) =>
											changeUsernameValue(value.target.value)
										}
										variant='outlined'
										InputLabelProps={{
											style: { color: "white" },
										}}
										sx={{
											input: {
												color: "white",
											},
											color: "white",
											".MuiOutlinedInput-notchedOutline": {
												borderColor: "white",
											},
											"&:hover .MuiOutlinedInput-notchedOutline": {
												borderColor: "white",
											},
										}}
									/>
								</Grid>

								<Grid item sx={{ paddingBottom: "10px", width: "300px" }}>
									<Grid
										container
										direction='row'
										justifyContent='center'
										alignItems='center'
										sx={{ width: "100%" }}
									>
										<Grid item sx={{ width: "150px" }}>
											<TextField
												label='Date'
												fullWidth
												value={date}
												onChange={(value) => changeDate(value.target.value)}
												variant='outlined'
												InputLabelProps={{
													style: { color: "white" },
												}}
												sx={{
													input: {
														color: "white",
													},
													color: "white",
													".MuiOutlinedInput-notchedOutline": {
														borderColor: "white",
													},
													"&:hover .MuiOutlinedInput-notchedOutline": {
														borderColor: "white",
													},
												}}
											/>
										</Grid>
										<Grid item sx={{ width: "150px" }}>
											<FormControl fullWidth size='medium'>
												<InputLabel sx={{ color: "white" }}>
													Verified?
												</InputLabel>
												<Select
													value={verified}
													label='Verified'
													onChange={(value) =>
														changeVerifiedValue(value.target.value as number)
													}
													sx={{
														input: {
															color: "white",
														},
														color: "white",
														".MuiOutlinedInput-notchedOutline": {
															borderColor: "white",
														},
														"&:hover .MuiOutlinedInput-notchedOutline": {
															borderColor: "white",
														},
														"& .MuiSvgIcon-root": {
															color: "white",
														},
													}}
												>
													<MenuItem value={1}>True</MenuItem>
													<MenuItem value={0}>False</MenuItem>
												</Select>
											</FormControl>
										</Grid>
									</Grid>
								</Grid>

								<Grid item sx={{ paddingBottom: "10px", width: "300px" }}>
									<TextField
										label='Message'
										fullWidth
										value={messageValue}
										onChange={(value) => changeMessageValue(value.target.value)}
										rows={3}
										multiline
										variant='outlined'
										InputProps={{
											style: { color: "white" },
										}}
										InputLabelProps={{
											style: { color: "white" },
										}}
										sx={{
											input: {
												color: "white",
											},
											color: "white",
											".MuiOutlinedInput-notchedOutline": {
												borderColor: "white",
											},
											"&:hover .MuiOutlinedInput-notchedOutline": {
												borderColor: "white",
											},
										}}
									/>
								</Grid>
								<Button
									variant='contained'
									onClick={() => {
										<Reviews
											name={usernameValue}
											date={date}
											stars={stars}
											message={messageValue}
											verified={verified === 1 ? true : false}
										/>;
										closeReviewSubmission();
									}}
								>
									Submit
								</Button>
							</Grid>
						</DialogContent>
					</Dialog>
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
