import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Container } from "@mui/material/"

export default function SortButton() {
    return (

                <Container
                    sx={{width: '100%',}}
                    style = {{background: 'gray', border: "1px solid white"}}>
                    <p className = 'SortBox'> Sort by: 
                        <select className='SelectionBoxStyle' id = "select2">
                        <option value = "oldest">Oldest</option>
                        <option value = "newest">Newest</option>
                        <option value = "most rated">Most Rated</option>

                        </select> <ArrowDownwardIcon /> </p>
                </Container>
    );
}

