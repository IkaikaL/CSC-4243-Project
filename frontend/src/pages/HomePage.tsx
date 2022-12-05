import React, { useState } from "react";
import { Grid, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import GlobalHeader from "../components/GlobalHeader";
import HomePageHeader from "../components/HomePageHeader";
import MainCategories from "../components/MainCategories";
import SubCategories from "../components/SubCategories";
import Footer from "../components/Footer";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#ffffff",
		},
	},
});
const HomePage = () => {
	const [category, setCategory] = useState("");
	const mainCategories = [
		"Community",
		"Services",
		"Discussion Forums",
		"Housing",
		"For Sale",
		"Jobs",
		"Gigs",
		"Resumes",
	];
	const community = [
		"activities",
		"artists",
		"childcare",
		"classes",
		"events",
		"general",
		"groups",
		"local news",
		"lost and found",
		"missed connections",
		"musicians",
		"pets",
		"politics",
		"rants and raves",
		"rideshare",
		"volunteers",
	];
	const services = [
		"automotive",
		"beauty",
		"cell/mobile",
		"computer",
		"creative",
		"cycle",
		"event",
		"farm and garden",
		"financial",
		"health/well",
		"household",
		"labor/move",
		"legal",
		"lessons",
		"marine",
		"pet",
		"real estate",
		"skilled trade",
		"sm biz ads",
		"travel/vac",
		"write/ed/tran",
	];
	const housing = [
		"apts / housing",
		"housing swap",
		"housing wanted",
		"office / commercial",
		"parking / storage",
		"real estate for sale",
		"rooms / shared",
		"rooms wanted",
		"sublets / temporary",
		"vacation rentals",
	];
	const forSale = [
		"antiques",
		"appliances",
		"arts and crafts",
		"atv/utv/sno",
		"auto parts",
		"aviation",
		"baby and kid",
		"barter",
		"beauty and health",
		"bike parts",
		"bikes",
		"boat parts",
		"boats",
		"books",
		"business",
		"cars and trucks",
		"cds/dvd/vhs",
		"cell phones",
		"clothes and acc",
		"collectibles",
		"computer parts",
		"computers",
		"electronics",
		"farm and garden",
		"free",
		"furniture",
		"garage sale",
		"general",
		"heavy equip",
		"household",
		"jewelry",
		"materials",
		"motorcycle parts",
		"motorcycles",
		"music instr",
		"photo and video",
		"sporting",
		"tickets",
		"tools",
		"toys and games",
		"trailers",
		"video gaming",
		"wanted",
		"wheels and tires",
	];
	const discussionForums = [
		"apple",
		"arts",
		"atheist",
		"autos",
		"beauty",
		"bikes",
		"celebs",
		"comp",
		"cosmos",
		"diet",
		"divorce",
		"dying",
		"eco",
		"feedbk",
		"film",
		"fixit",
		"food",
		"frugal",
		"gaming",
		"garden",
		"haiku",
		"help",
		"history",
		"housing",
		"jobs",
		"jokes",
		"legal",
		"manners",
		"marriage",
		"money",
		"music",
		"open",
		"parent",
		"pets",
		"philos",
		"photo",
		"politics",
		"psych",
		"recover",
		"religion",
		"rofo",
		"science",
		"spirit",
		"sports",
		"super",
		"tax",
		"travel",
		"tv",
		"vegan",
		"words",
		"writing",
	];
	const jobs = [
		"accounting and finance",
		"admin / office",
		"arch / engineering",
		"art / media / design",
		"biotech / science",
		"business / mgmt",
		"customer service",
		"education",
		"etc / misc",
		"food / bev / hosp",
		"general labor",
		"government",
		"human resources",
		"legal / paralegal",
		"manufacturing",
		"marketing / pr / ad",
		"medical / health",
		"nonprofit sector",
		"real estate",
		"retail / wholesale",
		"sales / biz dev",
		"salon / spa / fitness",
		"security",
		"skilled trade / craft",
		"software / qa / dba",
		"systems / network",
		"technical support",
		"transport",
		"tv / film / video",
		"web / info design",
		"writing / editing",
	];
	const gigs = [
		"computer",
		"creative",
		"crew",
		"domestic",
		"event",
		"labor",
		"talent",
		"writing",
	];
	let subCategories;
	if (category === "Community") {
		subCategories = (
			<SubCategories mainCategory={category} subCategory={community} />
		);
	} else if (category === "Services") {
		subCategories = (
			<SubCategories mainCategory={category} subCategory={services} />
		);
	} else if (category === "Discussion Forums") {
		subCategories = (
			<SubCategories mainCategory={category} subCategory={discussionForums} />
		);
	} else if (category === "Housing") {
		subCategories = (
			<SubCategories mainCategory={category} subCategory={housing} />
		);
	} else if (category === "For Sale") {
		subCategories = (
			<SubCategories mainCategory={category} subCategory={forSale} />
		);
	} else if (category === "Jobs") {
		subCategories = (
			<SubCategories mainCategory={category} subCategory={jobs} />
		);
	} else if (category === "Gigs") {
		subCategories = (
			<SubCategories mainCategory={category} subCategory={gigs} />
		);
	} else if (category === "Resumes") {
		subCategories = <SubCategories mainCategory={category} />;
	}

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
				<GlobalHeader isListingList={false} />
				<Grid
					container
					direction='column'
					alignItems='center'
					justifyContent='center'
					sx={{ width: "100%", height: "150%", backgroundColor: "#1E1E1E" }}
				>
					<Grid
						item
						sx={{ width: "100%", height: "100%", backgroundColor: "#1E1E1E" }}
					>
						<HomePageHeader location='Baton Rouge' />
					</Grid>
					<Grid
						item
						sx={{ width: "100%", height: "100%", backgroundColor: "#1E1E1E" }}
					>
						<MainCategories
							categoryList={mainCategories}
							setCategory={setCategory}
						/>
					</Grid>
					<Grid
						item
						sx={{
							paddingTop: "20px",
							width: "100%",
							minHeight: "100px",
							backgroundColor: "#1E1E1E",
						}}
					>
						{subCategories}
					</Grid>
					<Grid item sx={{ paddingTop: "10px", paddingBottom: "10px" }}>
						<Footer />
					</Grid>
				</Grid>
			</Container>
		</ThemeProvider>
	);
};

export default HomePage;
