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
            <Typography>
                {priceStr}
            </Typography>
        );
    }

    const detailTable = () => {
        let extraRows;
        if (priceCategories.includes(mainCategory)) {
            extraRows = [
                (<TableRow>
                    <TableCell>Condition</TableCell>
                    <TableCell>{details.condition}</TableCell> 
                </TableRow>),
                (<TableRow>
                    <TableCell>Quantity</TableCell>
                    <TableCell>{details.quantity}</TableCell>
                </TableRow>)
            ];
        }
        else if (wageCategories.includes(mainCategory)) {
            extraRows = [
                (<TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell>{details.title}</TableCell> 
                </TableRow>),
                (<TableRow>
                    <TableCell>Employment</TableCell>
                    <TableCell>{details.employment}</TableCell>
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
                        <TableCell>Subcategory</TableCell>
                        <TableCell>{details.subcategory}</TableCell>
                    </TableRow>
                    {extraRows}
                </TableBody>
            </Table>
        );
    }

    return (
        <Container sx={{ width: "250px", background: "lightGrey" }}>
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
                    <Typography>
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