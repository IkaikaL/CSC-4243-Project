import React from 'react'
import './TotalReviewMenu.css';
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/Person';

const text = 'Customer Reviews';

function SellerInfo (props: any) {
  return (
      <div>
        {props.name} <br /> <br/> User since: {props.date} <br />
      </div>
  );
}

export default function TotalReviewMenu() {
  return (
    <nav className = 'entiresection'>
    <div className = 'main' >
      <b className = 'TitleFormat' >Customer Reviews</b>
      <p className = 'StarFormat' ><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></p> 
      <p className ='NumProduct' >Product Ratings</p>
    </div>
    <div className = 'main'>
      <b className='ReviewSeller_title'>Review this seller</b>
      <p>Please share your thoughts with others.</p>
      <p className= 'Submit_Review'> <a href = "/reviewbutton">Submit a Review </a></p>

    </div>
    <div className = 'submain'>
      <p className = 'sellertitle'>Seller Profile</p>
      <div className = 'sellerprofile' >
        <div className='sellerprofileIMGwindow'>
          <p className = 'sellerprofileIMG'><PersonIcon /></p>
        </div>
        <div className = 'sellerusername'>
        <SellerInfo name = "Riley47768" date = "Oct. 4, 2016"/>
        </div>
      </div>
    </div>
    </nav>
  );
}