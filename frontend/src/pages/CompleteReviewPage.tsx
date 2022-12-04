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
                        minHeight: "100%",
                        backgroundColor: "#1E1E1E",
                        width: '1000px',
                        height: '100%'}}
                    style = {{border: "1px solid white"}}>
                
                <GlobalHeader />
                <Container>
                    <Grid
                    justifyContent='start'
                    container direction = 'row'
                    sx = {{ paddingLeft: '100px', }}>
                        <Grid
                        sx={{ width: "200px", height: "350px", marginTop: '20px'}}
                        style = {{border: "1px solid green"}}
                        >
                            <TotalReviewMenu />
                        </Grid>

                        <Grid 
                        sx = {{marginLeft: '40px'}}>
                            <Grid item
                            sx = {{ marginTop: '20px', marginLeft: '25px'}}
                            >
                                <SortButton />
                            </Grid>
                            
                            <Grid item
                            sx = {{ marginTop: '25px' , marginLeft: '15px'}}
                            >
                                <Reviews />
                            </Grid>
                        </Grid>

                    </Grid>

                    <Grid item>
                        <Footer />
                    </Grid>

                </Container>
            </Container>
        </ThemeProvider>
    )
};

export default CompleteReviewPage;
