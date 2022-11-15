import React from 'react';
import TotalReviewMenu from '../components/TotalReviewMenu/TotalReviewMenu'
import GlobalHeader from '../components/GlobalHeader';
import SortButton from '../components/SortButton/SortButton';
import Reviews from '../components/Reviews/Reviews';
import { Grid, Container } from "@mui/material";



const CompleteReviewPage = () => {
    return (
    <Container
            disableGutters={true}
            sx={{
                minWidth: "100%",
                minHeight: "1000px",
            }}
        >
            <GlobalHeader />
            <Grid
                container
                direction='column'
                alignItems='center'
                justifyContent='center'
                sx={{ width: "1000px", height: "150%"}}
            >
                <Grid item>
                    <TotalReviewMenu />
                </Grid>
                <Grid item>
                    <SortButton />
                </Grid>
                <Grid item>
                    <Reviews />
                </Grid>
            </Grid>
        </Container>
    )
};

export default CompleteReviewPage;