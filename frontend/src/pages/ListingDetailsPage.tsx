import { Container, Grid } from "@mui/material";
import ListingDescription from "../components/ListingDescription";
import ListingTitleGallery from "../components/ListingTitleGallery";
import ListingDetails from "../components/ListingDetails";

// https://batonrouge.craigslist.org/spo/7549043786.html
const listingCategory = "for sale";
const listingPrice = 700;
const listingDetails = {subcategory: "sporting", condition: "used", quantity: 1, title: "", employment: ""}

const testDescription = {description: "in GREAT Shape , never been in the water. Christmas Gift that has been stored since getting. 11-1/2 feet long", publishDate: "10/23/2022"};
const seller = {username: "NotARobot", profileImagePath:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.jHuJyHBQHuvP9BaqeSEdYAHaFg%26pid%3DApi&f=1&ipt=81fef1be5a99d7a59d8923a01c891943774666ff4c4519667b31f76f65442703&ipo=images"};

const title = "Test Listing";
const imgPaths = [
    "https://images.craigslist.org/00909_kqnMb9JkMA6z_0CI0t2_1200x900.jpg",
    "https://images.craigslist.org/00u0u_dDZCE6wqufRz_0CI0t2_1200x900.jpg",
    "https://images.craigslist.org/00s0s_4cGrEMEzO2ez_0CI0t2_1200x900.jpg",
    "https://images.craigslist.org/00202_7KveBV9V2tKz_0t20CI_1200x900.jpg",
    "https://images.craigslist.org/00U0U_cpBV7viBzjRz_0CI0t2_1200x900.jpg",
    "https://images.craigslist.org/00Z0Z_543ch9F8XATz_0CI0t2_1200x900.jpg",
    "https://images.craigslist.org/00o0o_4AMLksNYePnz_0t20CI_1200x900.jpg"
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
                sx={{ width: "100%"}}
            >
                <Grid item>
                    "Header"
                </Grid>

                <Grid 
                    item 
                    container 
                    direction="row"
                    alignItems="center"
                    sx={{ width: "1000px" }}
                >
                    <Grid item sx={{ width: "69%" }}>
                        <ListingTitleGallery listingTitle={title} listingImagePaths={imgPaths} />
                    </Grid>
                    <Grid item justifyContent="right">
                        <ListingDetails mainCategory={listingCategory} price={listingPrice} details={listingDetails} />
                    </Grid>
                </Grid>
                <Grid item sx={{ width: "1000px" }}>
                    <ListingDescription seller={seller} listingDesc={testDescription} />
                </Grid>
            </Grid>
        </Container>
    );
}

export default ListingDetailsPage;