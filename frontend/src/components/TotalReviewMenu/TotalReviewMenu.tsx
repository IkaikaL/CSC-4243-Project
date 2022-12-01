import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/Person';
import { Container, Grid} from "@mui/material";
import Paper from '@mui/material/Paper';
const text = 'Customer Reviews';

function SellerInfo (props: any) {
  return (
      <div>
        {props.name} <br /> <br/> User since: {props.date} <br />
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

export default function TotalReviewMenu() {
  return (
    <Container sx={{ width: "1000px" }}>
			<Grid
				container
				direction='row'
				justifyContent='center'
				alignItems='center'
				sx={{ width: "200px", height: "350px", backgroundColor: 'white', marginTop: '20px', marginTight: '10px'}}
			>
        <Paper style = {classes.paper}>
        <b>Customer Reviews</b>
        <p className = 'StarFormat' ><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></p> 
        <p className ='NumProduct' >Product Ratings</p>

      <div className = 'main'>
        <b className='ReviewSeller_title'>Review this seller</b>
        <p>Please share your thoughts with others.</p>
        <p className= 'Submit_Review'> <a href = "/reviewbutton">Submit a Review </a></p>

      </div>
      <Grid>
        <p className = 'sellertitle'>Seller Profile</p>
        <div className = 'sellerprofile' >
          <div className='sellerprofileIMGwindow'>
            <p className = 'sellerprofileIMG'><PersonIcon /></p>
          </div>
          <div className = 'sellerusername'>
          <SellerInfo name = "Riley47768" date = "Oct. 4, 2016"/>
          </div>
        </div>
        </Grid>
      </Paper>
    </Grid>
    </Container>
  );
}