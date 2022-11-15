import React, { useState } from "react";
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

import "./LikeCount.css";

function LikeCount () {
    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0);
    const [activeBtn, setActiveBtn] = useState("none");

    const handleLikeClick = () => {
        if (activeBtn === "none") {
          setLikeCount(likeCount + 1);
          setActiveBtn("like");
          return;
        }
    
        if (activeBtn === 'like'){
          setLikeCount(likeCount - 1);
          setActiveBtn("none");
          return;
        }
    
        if (activeBtn === "dislike") {
          setLikeCount(likeCount + 1);
          setDislikeCount(dislikeCount - 1);
          setActiveBtn("like");
        }
      };
    
      const handleDisikeClick = () => {
        if (activeBtn === "none") {
          setDislikeCount(dislikeCount + 1);
          setActiveBtn("dislike");
          return;
        }
        
        if (activeBtn === 'dislike'){
          setDislikeCount(dislikeCount - 1);
          setActiveBtn("none");
          return;
        }
    
        if (activeBtn === "like") {
          setDislikeCount(dislikeCount + 1);
          setLikeCount(likeCount - 1);
          setActiveBtn("dislike");
        }
      };

      const handleReportClick = () => {
        if (activeBtn === "report") {
          setActiveBtn("report");
          return;
        }
      };
    
    
      return (
        <div className="container">
          <div className="btn-container">
            <button
              className={`btn ${activeBtn === 'like' ? 'like-active' : ''}`}
              onClick={handleLikeClick}
            >
              <span className="material-symbols-rounded"><ThumbUpIcon /></span>
              {likeCount}
            </button>
    
            <button
              className={`btn ${activeBtn === 'dislike' ? 'dislike-active' : ''}`}
              onClick={handleDisikeClick}
            >
              <span className="material-symbols-rounded"><ThumbDownIcon /></span>
              {dislikeCount}
            </button>

            <button
            className = {`btn ${activeBtn === 'report' ? 'report-active' : ''}`}
            onClick = {handleReportClick}
            >
                <PriorityHighIcon />
            </button>
          </div>
        </div>
      );
    }
    
    export default LikeCount;