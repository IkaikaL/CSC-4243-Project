import React from 'react'
import LikeCount from './LikeCount/LikeCount'

import StarIcon from '@mui/icons-material/Star';
import Paper from '@mui/material/Paper';
import { Grid, Container } from "@mui/material";

function UserInfo (props: any) {
    return (
        <div>
            By {props.name} <br />Submitted {props.date} <br /> {props.verified}
        </div>
    );
}

function UserReview (props: any) {
    return (
        <div>
            {props.review}
        </div>
    );
}

const classes = {
    paper: {
        p:0.5,
        marginBottom: '10px',
        backgroundColor: 'white',
        padding: '10px',

    }
}

// type Props = {
//     setInfo: Array<string>
//     name: string;
//     date: string;
//     verified: string;
//     review: string;
// }

// class reviewinfo {
//     star: number;
//     name:string;
//     date:string;
//     verified:boolean;
//     review:string;

//     constructor(star:number, name:string, date:string,verified:boolean, review:string){
//         this.star = star;
//         this.name = name;
//         this.date = date;
//         this.verified = verified;
//         this.review = review;
//     }
// }


const Reviews = (props: any) => {
    const {setInfo, name, date, verified, review } = props;
    return (
        <Container sx={{ width: "600px" }} >
            <Grid
                container
                spacing={3}
                direction='column'
                alignItems='left'
                justifyContent='center'
                sx={{ width: "100%", height: "100%" }}
            >
                <Grid item sx = {{ width: "1000px"}}>
                    <Paper style ={classes.paper}>
                        <Grid
                        >

                        <div className = 'topright_reviewbox'> 
                            <p className = 'stars'> <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /> </p>  
                            <p className = 'buyerid'> <UserInfo name = "boatluver1855" date = "Nov. 18, 2019" verified = "Verified purchase" /></p>
                            <p className =  'dateid'><LikeCount /></p>
                        </div>
                        </Grid>
                        <Grid>
                        <div className = 'ReviewContent_Container'>
                            <UserReview review = "Merchandise was well kept. Very knowledgable on engines. Would buy from again." />
                        </div>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item sx = {{ width: "1000px", padding: '10px', spacing: 4}}>
                <Paper style = {classes.paper}>
                <div className = 'Review_Divider'>
                    <div className = 'Review_Container'>
                        <div className='topright_reviewbox'>
                            <p className = 'stars'> <StarIcon /><StarIcon /><StarIcon /> </p>
                            <p className = 'buyerid'> <UserInfo name = "mmregan511" date = "Jan. 6, 2021" verified = "Verified purchase"/> </p>
                            <p className = 'dateid'> <LikeCount /></p>
                        </div>
                        <div className = 'ReviewContent_Container'>
                            <UserReview review = "Arrived at the place to take a look at his stuff. Didn't tell me in advance that he was going to be late, so I ended up waiting for two hours before he got to our meeting location." />
                        </div>
                    </div>
                </div>
                </Paper>
                </Grid>
                <div className = 'Review_Divider'>
                    <div className = 'Review_Container'>
                        <div className='topright_reviewbox'>
                            <p className = 'stars'> <StarIcon /><StarIcon /><StarIcon /><StarIcon /> </p>
                            <p className = 'buyerid'> <UserInfo name = "jaxjil_xXx_4154" date = "Jun. 19, 2021" verified = "Verified purchase"/> </p>
                            <p className = 'dateid'> <LikeCount /></p>
                        </div>
                        <div className = 'ReviewContent_Container'>
                            <UserReview review = "Got what I wanted. Case was damaged on the side, which wasn't told on the listing." />
                        </div>
                    </div>
                </div>
            </Grid>
        </Container>
)
}

export default Reviews;