import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ListingDescription from "./components/ListingDescription";

const testDescription = {description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", publishDate: "01/01/2022"};
const seller = {username: "NotARobot", profileImagePath:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.jHuJyHBQHuvP9BaqeSEdYAHaFg%26pid%3DApi&f=1&ipt=81fef1be5a99d7a59d8923a01c891943774666ff4c4519667b31f76f65442703&ipo=images"};
// const seller = {username: "NotARobot", profileImagePath:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6jnkAUhi_xp42OdSeqJeaAAAAA%26pid%3DApi&f=1&ipt=f3a3498b4132a5d88f8d142019e8361aae786962c74a7f8c10780031607de97c&ipo=images"};

function App() {
	return (
		<ListingDescription seller={seller} listingDesc={testDescription}/>
	);
}

export default App;
