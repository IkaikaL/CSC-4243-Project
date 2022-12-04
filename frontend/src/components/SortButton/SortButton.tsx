import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Card, Grid } from "@mui/material/"

export default function SortButton() {
    return (
            <Grid 
            style = {{backgroundColor: 'lightgray',}}
            sx = {{  width: '190px', height: '35px', paddingLeft: '5px'}}>
                    <p className = 'SortBox'> Sort by: 
                        <select className='SelectionBoxStyle' id = "select2">
                        <option value = "oldest">Oldest</option>
                        <option value = "newest">Newest</option>
                        <option value = "most rated">Most Rated</option>
                        </select> <ArrowDownwardIcon />
                    </p>
            </Grid>
    );
}
