import React, { useEffect } from "react";
import LikeCount from "./LikeCount/LikeCount";

import StarIcon from "@mui/icons-material/Star";
import Paper from "@mui/material/Paper";
import { Grid, Container, Typography, Box } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";

type Props = { reviews: Array<reviewDetails> };

type reviewDetails = {
	name: string;
	date: Dayjs | null;
	verified: boolean;
	message: string;
	stars: number;
};

const Reviews = (props: Props) => {
	const { reviews } = props;

	return (
		<Container sx={{ width: "770px", minHeight: "700px" }}>
			<Grid
				container
				direction='column'
				alignItems='center'
				justifyContent='space-evenly'
				sx={{ width: "100%", height: "100%" }}
			>
				{reviews.map((item, index) => (
					<Grid
						item
						sx={{
							padding: "10px",
							backgroundColor: "#423F3E",
							borderRadius: "3px",
							color: "white",
							minWidth: "100%",
						}}
					>
						{item.stars === 1 ? (
							<Container disableGutters={true} sx={{ color: "yellow" }}>
								<StarIcon />
							</Container>
						) : null}
						{item.stars === 2 ? (
							<Container disableGutters={true} sx={{ color: "yellow" }}>
								<StarIcon /> <StarIcon />
							</Container>
						) : null}
						{item.stars === 3 ? (
							<Container disableGutters={true} sx={{ color: "yellow" }}>
								<StarIcon /> <StarIcon /> <StarIcon />
							</Container>
						) : null}
						{item.stars === 4 ? (
							<Container disableGutters={true} sx={{ color: "yellow" }}>
								<StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
							</Container>
						) : null}
						{item.stars === 5 ? (
							<Container disableGutters={true} sx={{ color: "yellow" }}>
								<StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
							</Container>
						) : null}
						<Typography> {item.name}</Typography>

						<Typography>{dayjs(item.date).format("MMM. D YYYY")}</Typography>

						<Typography>
							{item.verified ? "Verified Purchase" : "Not Verified Purchase"}
						</Typography>
						<Typography>{item.message}</Typography>
						<LikeCount />
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default Reviews;
