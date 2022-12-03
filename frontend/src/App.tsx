import React from "react";
import HomePage from "./pages/HomePage";
import { Container } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Listings from "./pages/Listings";
import ListingDetailsPage from "./pages/ListingDetailsPage";
import CompleteReviewPage from "./pages/CompleteReviewPage";

function App() {
	return (
		<Container
			sx={{ minWidth: "100%", minHeight: "100%" }}
			disableGutters={true}
		>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/listings' element={<Listings />} />
					<Route path='/listingDetails' element={<ListingDetailsPage />} />
					<Route path='/reviews' element={<CompleteReviewPage />} />
				</Routes>
			</BrowserRouter>
		</Container>
	);
}

export default App;
