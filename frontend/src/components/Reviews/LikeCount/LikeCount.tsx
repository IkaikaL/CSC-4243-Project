import React, { useState } from "react";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { Container, Button, Grid } from "@mui/material";

import "./LikeCount.css";

function LikeCount() {
	const [likeCount, setLikeCount] = useState(0);
	const [dislikeCount, setDislikeCount] = useState(0);
	const [activeBtn, setActiveBtn] = useState("none");

	const handleLikeClick = () => {
		if (activeBtn === "none") {
			setLikeCount(likeCount + 1);
			setActiveBtn("like");
			return;
		}

		if (activeBtn === "like") {
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

		if (activeBtn === "dislike") {
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
		<Container>
			<Grid
				container
				direction='row'
				justifyContent='flex-end'
				alignItems='center'
			>
				<Button
					className={`btn ${activeBtn === "like" ? "like-active" : ""}`}
					onClick={handleLikeClick}
				>
					<ArrowUpwardIcon />

					{likeCount}
				</Button>

				<Button
					className={`btn ${activeBtn === "dislike" ? "dislike-active" : ""}`}
					onClick={handleDisikeClick}
				>
					<ArrowDownwardIcon />
					{dislikeCount}
				</Button>
			</Grid>
		</Container>
	);
}

export default LikeCount;
