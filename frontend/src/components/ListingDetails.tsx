import { Button, Container, Table, Typography, Grid, TableBody, TableRow, TableCell } from "@mui/material";

type Details = {
    subcategory: string;
    condition: string;
    quantity: number;
    title: string;
    employment: string;
}

type Props = {
    mainCategory: string;
    price: number;
    details: Details;
}

const ListingDetails = (props: Props) => {
    const {mainCategory, price, details} = props;

    const priceCategories = [
        "for sale",
        "housing",
        "services"
    ];

    const wageCategories = [
        "jobs"
    ];

    const priceSpace = () => {
        let priceStr;
        if (priceCategories.includes(mainCategory)) {
            priceStr = "Price: " + price.toFixed(2);
        }
        else if (wageCategories.includes(mainCategory)) {
            priceStr = "Offer: " + price.toFixed(2);
        }
        else {
            priceStr = mainCategory;
        }
        
        return (
            <Typography color="white">
                {priceStr}
            </Typography>
        );
    }

    const detailTable = () => {
        let extraRows;
        if (priceCategories.includes(mainCategory)) {
            extraRows = [
                (<TableRow>
                    <TableCell><Typography color="white" sx={{ height: "10px" }}>Condition</Typography></TableCell>
                    <TableCell><Typography color="white" sx={{ height: "10px" }}>{details.condition}</Typography></TableCell> 
                </TableRow>),
                (<TableRow>
                    <TableCell><Typography color="white" sx={{ height: "10px" }}>Quantity</Typography></TableCell>
                    <TableCell><Typography color="white" sx={{ height: "10px" }}>{details.quantity}</Typography></TableCell>
                </TableRow>)
            ];
        }
        else if (wageCategories.includes(mainCategory)) {
            extraRows = [
                (<TableRow>
                    <TableCell><Typography color="white" sx={{ height: "10px" }}>Title</Typography></TableCell>
                    <TableCell><Typography color="white" sx={{ height: "10px" }}>{details.title}</Typography></TableCell> 
                </TableRow>),
                (<TableRow>
                    <TableCell><Typography color="white" sx={{ height: "10px" }}>Employment</Typography></TableCell>
                    <TableCell><Typography color="white" sx={{ height: "10px" }}>{details.employment}</Typography></TableCell>
                </TableRow>)
            ];
        }
        else {
            // Don't have anything else for now
            // extraRows = "";
        }
        
        return (
            <Table
                sx={{  }}
            >
                <TableBody>
                    <TableRow>
                        <TableCell><Typography color="white" sx={{ height: "10px" }}>Subcategory</Typography></TableCell>
                        <TableCell><Typography color="white" sx={{ height: "10px" }}>{details.subcategory}</Typography></TableCell>
                    </TableRow>
                    {extraRows}
                </TableBody>
            </Table>
        );
    }

    return (
        <Container sx={{ width: "280px", background: "grey", height: "400px", padding: "4px", marginTop: "30px", marginLeft: "8px" }}>
            <Grid
				container
				direction='column'
				justifyContent='center'
				alignItems='center'
				sx={{ width: "100%" }}
                spacing="4px"
			>
                <Grid item>
                    {priceSpace()}
                </Grid>
                <Grid item>
                    <Button variant="contained">
                        contact
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained">
                        favorite
                    </Button>
                </Grid>

                <Grid item>
                    <Typography color="white" sx={{ marginTop: "8px", marginBottom: "0px" }}>
                        Key Details
                    </Typography>
                </Grid>
                <Grid item>
                    {detailTable()}
                </Grid>
            </Grid>
        </Container>
    );
}

export default ListingDetails;