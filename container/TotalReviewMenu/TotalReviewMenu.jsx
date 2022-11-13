import React from 'react'
import './TotalReviewMenu.css';
import { CiStar } from 'react-icons/ci';
import { BsPerson } from 'react-icons/bs';

const text = 'Customer Reviews';

function SellerInfo (props) {
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
      <p className = 'StarFormat' ><CiStar /><CiStar /><CiStar /><CiStar /><CiStar /></p> 
      <p className ='NumProduct' >Product Ratings</p>
    </div>
    <div className = 'main'>
      <b className='ReviewSeller_title'>Review this seller</b>
      <p>Please share your thoughts with others.</p>
      <p className= 'Submit_Review'> Submit a Review </p>
    </div>
    <div className = 'submain'>
      <p className = 'sellertitle'>Seller Profile</p>
      <div className = 'sellerprofile' >
        <div className='sellerprofileIMGwindow'>
          <p className = 'sellerprofileIMG'><BsPerson /></p>
        </div>
        <div className = 'sellerusername'>
        <SellerInfo name = "Riley47768" date = "Oct. 4, 2016"/>
        </div>
      </div>
    </div>
    </nav>
  );
}
