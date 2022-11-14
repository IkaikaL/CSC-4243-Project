import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ListingDetails from "./components/ListingDetails";

const listingCategory = "for sale";
const listingPrice = 50.50;
const listingDetails = {subcategory: "appliances", condition: "used", quantity: 1, title: "", employment: ""}

function App() {
	return (
		<ListingDetails mainCategory={listingCategory} price={listingPrice} details={listingDetails} />
	);
}

export default App;
