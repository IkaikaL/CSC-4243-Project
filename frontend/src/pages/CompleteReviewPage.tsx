import TotalReviewMenu from "../components/TotalReviewMenu/TotalReviewMenu";
import GlobalHeader from "../components/GlobalHeader";
import SortButton from "../components/SortButton/SortButton";
import Reviews from "../components/Reviews/Reviews";
import { Grid, Container } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import Footer from "../components/Footer";
import { useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";

type Props = {
	name?: string;
	date?: Dayjs;
	verified?: boolean;
	message?: string;
	stars?: number;
};
const theme = createTheme({
	palette: {
		primary: {
			main: "#ffffff",
		},
	},
});
const reviewDetails = [
	{
		name: "boatluver1855",
		date: dayjs("Nov. 18, 2019"),
		verified: true,
		message:
			"Merchandise was well kept. Very knowledgable on engines. Would buy from again.",
		stars: 5,
	},
	{
		name: "mmregan511",
		date: dayjs("Jan. 6, 2021"),
		verified: true,
		message:
			"Arrived at the place to take a look at his stuff. Didn't tell me in advance that he was going to be late, so I ended up waiting for two hours before he got to our meeting location.",
		stars: 2,
	},
	{
		name: "jaxjil_xXx_4154",
		date: dayjs("Jun. 19, 2021"),
		verified: true,
		message:
			"Got what I wanted. Case was damaged on the side, which wasn't told on the listing.",
		stars: 3,
	},
];

const CompleteReviewPage = (props: Props) => {
	const { name, date, verified, message, stars } = props;
	const temp = {
		name: name,
		date: date,
		verified: verified,
		message: message,
		stars: stars,
	};
	useEffect(() => {
		reviewDetails.push(temp);
	});
	return (
		<ThemeProvider theme={theme}>
			<Container
				disableGutters={true}
				sx={{
					minWidth: "100%",
					minHeight: "1000px",
					backgroundColor: "#1E1E1E",
				}}
			>
				<Grid
					container
					direction='column'
					justifyContent='center'
					alignItems='center'
					sx={{ width: "100%", height: "150%" }}
				>
					<Grid item>
						<GlobalHeader isListingList={false} />
					</Grid>

					<Grid item sx={{ paddingTop: "20px" }}>
						<Grid
							container
							direction='row'
							justifyContent='flex-start'
							alignItems='flex-start'
							sx={{ width: "1000px" }}
						>
							<Grid item sx={{ paddingRight: "10px" }}>
								<TotalReviewMenu />
							</Grid>

							<Grid item sx={{}}>
								<SortButton />
							</Grid>
							<Grid
								item
								sx={{
									width: "100px",
									height: "700px",
									paddingTop: "50px",
									marginLeft: "-215px",
								}}
							>
								<Reviews reviews={reviewDetails} />
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</ThemeProvider>
	);
};

export default CompleteReviewPage;
