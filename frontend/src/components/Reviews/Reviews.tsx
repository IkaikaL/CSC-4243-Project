import React from 'react'
import LikeCount from './LikeCount/LikeCount'
import './Reviews.css';
import StarIcon from '@mui/icons-material/Star';

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

const Reviews = () => {
    return (
        <nav className = 'section_relocation'>
            <div className = 'Review_Divider'>
                <div className = 'Review_Container'>
                    <div className = 'topright_reviewbox'> 
                        <p className = 'stars'> <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /> </p>  
                        <p className = 'buyerid'> <UserInfo name = "boatluver1855" date = "Nov. 18, 2019" verified = "Verified purchase" /></p>
                        <p className =  'dateid'><LikeCount /></p>
                    </div>
                    <div className = 'ReviewContent_Container'>
                        <UserReview review = "Merchandise was well kept. Very knowledgable on engines. Would buy from again." />
                    </div>
                </div>
            </div>
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
        </nav>
    )
}

export default Reviews;