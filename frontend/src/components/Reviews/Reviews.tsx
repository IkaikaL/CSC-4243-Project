import LikeCount from './LikeCount/LikeCount'
import StarIcon from '@mui/icons-material/Star';
import Paper from '@mui/material/Paper';
import { Grid, Container } from "@mui/material";

// function formatReview(name: string, StarRating: number, date: string, verified: boolean, review: string) {
//     return (
//         if (verified == true) {
        
//         var confirmVerified: string;
//         confirmVerified = 'Verified purchase';
//         var stars = StarRating;

//         <Grid item style = {classes.reviewgrid}>
//                     <Paper style = {classes.paper}>
//                         <Grid container direction = 'row'>
//                             <Grid sx = {{width: '150px'}}>
//                                 if (stars == 5) {
//                                         <p style = {classes.starUpColor}> <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /> </p>
//                                     }
//                                 else if (stars == 4) {
//                                         <p style = {classes.starUpColor}> <StarIcon /><StarIcon /><StarIcon /><StarIcon /></p>
//                                     }
//                                 else if (stars == 3) {
//                                         <p style = {classes.starUpColor}><StarIcon /><StarIcon /><StarIcon /> </p>
//                                     }
//                                 else if (stars == 2) {
//                                         <p style = {classes.starUpColor}><StarIcon /><StarIcon /> </p>
//                                     }
//                                 else if (stars == 1) {
//                                         <p style = {classes.starUpColor}><StarIcon /> </p>
//                                     }

//                                 <p style = {classes.starUpColor}> <StarIcon /><StarIcon /><StarIcon /> </p>
//                                 <p> By {name} <br />Submitted <br /> {date} <br /> {confirmVerified} </p>
//                                 <p> <LikeCount /></p>
//                             </Grid>
//                             <Grid sx = {{ width: '400px' }}>
//                                 <p> {review} </p>    
//                             </Grid>
//                         </Grid>
//                     </Paper>
//                 </Grid>
        
//         }
//         else {
//             return
//         }
//     )
// }

function UserInfo (props: any) {
    return (
        <div>
            By {props.name} <br />Submitted <br /> {props.date} <br /> {props.verified}
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
    },

    reviewgrid: {
        width: "600px",
        padding: '10px',
    },
    
    starUpColor: {
        color: 'yellow',
        
    },

    starDownColor: {
        color: 'lightgray',
    },
}


const Reviews = (props: any) => {
    return (
            <Grid>
                <Grid item style = {classes.reviewgrid}>
                    <Paper style ={classes.paper}>
                        <Grid container direction = 'row'>
                            <Grid sx = {{width: '150px'}}>
                                <span style = {classes.starUpColor}> <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /> </span>  
                                <p className = 'buyerid'> <UserInfo name = "boatluver1855" date = "Nov. 18, 2019" verified = "Verified purchase" /></p>
                                <p className =  'dateid'><LikeCount /></p>
                            </Grid>
                            <Grid sx = {{ width: '400px' }}>
                                <UserReview review = "Merchandise was well kept. Very knowledgable on engines. Would buy from again." />
                            </Grid>

                        </Grid>
                    </Paper>
                </Grid>

                <Grid item style = {classes.reviewgrid}>
                    <Paper style = {classes.paper}>
                        <Grid container direction = 'row'>
                            <Grid sx = {{width: '150px'}}>
                                <p>
                                    <span style = {classes.starUpColor}><StarIcon /> <StarIcon /> <StarIcon /> </span>
                                    {/* <span style = {classes.starDownColor}><StarIcon /> <StarIcon /> </span> */}
                                </p>
                                <p> <UserInfo name = "mmregan511" date = "Jan. 6, 2021" verified = "Verified purchase"/> </p>
                                <p> <LikeCount /></p>
                            </Grid>
                            <Grid sx = {{ width: '400px' }}>
                                <UserReview review = "Arrived at the place to take a look at his stuff. Didn't tell me in advance that he was going to be late, so I ended up waiting for two hours before he got to our meeting location." />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item style = {classes.reviewgrid}>
                    <Paper style = {classes.paper}>
                        <Grid container direction = 'row'>
                            <Grid sx = {{width: '150px', marginTop: '15px' }}>
                                <span style = {classes.starUpColor}><StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> </span>
                                <span style = {classes.starDownColor}><StarIcon /></span>
                                <p> <UserInfo name = "jaxjil_xXx_4154" date = "Jun. 19, 2021" verified = "Verified purchase"/> </p>
                                <p> <LikeCount /></p>
                            </Grid>
                            <Grid sx = {{ width: '400px' }}>
                            <UserReview review = "Got what I wanted. Case was damaged on the side, which wasn't told on the listing." />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
    )
}

export default Reviews;
