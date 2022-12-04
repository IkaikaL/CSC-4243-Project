import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Card, Grid, Typography } from "@mui/material/";

export default function SortButton() {
	return (
		<Grid
			container
			direction='row'
			justifyContent='space-evenly'
			alignItems='center'
			sx={{
				width: "190px",
				height: "35px",
				paddingLeft: "5px",
				backgroundColor: "#423F3E",
				borderRadius: "3px",
			}}
		>
			<Grid item sx={{ color: "white" }}>
				<Typography>Sort by:</Typography>
			</Grid>
			<select className='SelectionBoxStyle' id='select2'>
				<option value='oldest'>Oldest</option>
				<option value='newest'>Newest</option>
				<option value='most rated'>Most Rated</option>
			</select>
		</Grid>
	);
}
