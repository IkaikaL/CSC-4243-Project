import React from 'react';
import TotalReviewMenu from '../components/TotalReviewMenu/TotalReviewMenu'
import GlobalHeader from '../components/GlobalHeader';
import SortButton from '../components/SortButton/SortButton';
import Reviews from '../components/Reviews/Reviews';
import { Grid, Container } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from '@emotion/react';
import Footer from "../components/Footer";

const theme = createTheme({
	palette: {
		primary: {
			main: "#ffffff",
		},
		secondary: {
			main: "#5d8c55",
		},
	},
});


const CompleteReviewPage = () => {
    return (
        <ThemeProvider theme = {theme}>
            <Container
                    disableGutters={true}
                    sx={{
                        minWidth: "100%",
                        minHeight: "1000px",
                        backgroundColor: "#1E1E1E",
                    }}
                >
                <GlobalHeader />
                <Grid
                    container
					direction='column'
					alignItems='center'
					justifyContent='center'
					sx={{ width: "100%", height: "150%", backgroundColor: "#1E1E1E" }}
				>
                    <Grid item
                    sx={{ width: "200px", height: "100%", backgroundColor: "#1E1E1E" }}>
                        <TotalReviewMenu />
                    </Grid>
                    <Grid item>
                        <SortButton />
                    </Grid>
                    <Grid item>
                        <Reviews />
                    </Grid>
                    <Grid item sx={{ paddingTop: "10px", paddingBottom: "10px" }}>
                        <Footer />
                    </Grid>
                </Grid>
                
            </Container>
        </ThemeProvider>
    )
};

export default CompleteReviewPage;