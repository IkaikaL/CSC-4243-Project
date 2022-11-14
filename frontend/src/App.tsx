import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ListingTitleGallery from "./components/ListingTitleGallery";

const title = "Test Listing";
const imgPaths = [
	"https://media.geeksforgeeks.org/wp-content/uploads/20210208000010/1.png",
	"https://media.geeksforgeeks.org/wp-content/uploads/20210208000009/2.png",
	"https://media.geeksforgeeks.org/wp-content/uploads/20210208000008/3.png",
	"https://media.geeksforgeeks.org/wp-content/uploads/20210208000010/1.png",
	"https://media.geeksforgeeks.org/wp-content/uploads/20210208000009/2.png",
	"https://media.geeksforgeeks.org/wp-content/uploads/20210208000008/3.png",
	"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-KfJwNqD1VIU%2FXJcKmrIONtI%2FAAAAAAAACmM%2FJRDoWK5ieK0X9O-rO9x5jpqooyxPJu82QCLcBGAs%2Fw1200-h630-p-k-no-nu%2Fflex.png&f=1&nofb=1&ipt=66f56b5ee96a9aee083880bdd9074b660cb07b73708c88debc7dd3d451d30de6&ipo=images",
	"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fraw.githubusercontent.com%2FAndreYonadam%2Freact-native-scrolling-images%2Fmaster%2Fdemo%2Fup.gif&f=1&nofb=1&ipt=77276749d8446a8adfecd205bdd937d725e160d6b57fd36b691bcd9249f519be&ipo=images"
];

function App() {

	return (
		<ListingTitleGallery listingTitle={title} listingImagePaths={imgPaths}/>
	);
}

export default App;
