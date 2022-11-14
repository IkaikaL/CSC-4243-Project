import { Container, Grid } from "@mui/material";
import ListingDescription from "../components/ListingDescription";
import ListingTitleGallery from "../components/ListingTitleGallery";
import ListingDetails from "../components/ListingDetails";

const listingCategory = "for sale";
const listingPrice = 50.50;
const listingDetails = {subcategory: "appliances", condition: "used", quantity: 1, title: "", employment: ""}

const testDescription = {description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", publishDate: "01/01/2022"};
const seller = {username: "NotARobot", profileImagePath:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.jHuJyHBQHuvP9BaqeSEdYAHaFg%26pid%3DApi&f=1&ipt=81fef1be5a99d7a59d8923a01c891943774666ff4c4519667b31f76f65442703&ipo=images"};

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

const ListingDetailsPage = () => {
    return (
        <Container 
            disableGutters
            sx={{ minWidth: "100%", minHeight: "1000px", backgroundColor: "#1E1E1E" }}
        >
            <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ width: "100%", height: "150%" }}
            >
                <Grid item>
                    "Header"
                </Grid>

                <Grid 
                    item 
                    container 
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ width: "100%" }}
                >
                    <Grid item>
                        <ListingTitleGallery listingTitle={title} listingImagePaths={imgPaths} />
                    </Grid>
                    <Grid item>
                        <ListingDetails mainCategory={listingCategory} price={listingPrice} details={listingDetails} />
                    </Grid>
                </Grid>
                <Grid item sx={{ width: "100%" }}>
                    <ListingDescription seller={seller} listingDesc={testDescription} />
                </Grid>
            </Grid>
        </Container>
    );
}

export default ListingDetailsPage;