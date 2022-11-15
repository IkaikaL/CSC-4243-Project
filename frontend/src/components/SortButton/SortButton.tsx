import React from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import './SortButton.css';


export default function SortButton() {
    return (
        <nav className = 'sortsection'>
        <div>
            <p className = 'SortBox'> Sort by: 
                <select className='SelectionBoxStyle' id = "select1">
                <option value = "newest">Newest</option>
                <option value = "oldest">Oldest</option>
                <option value = "most rated">Most Rated</option>

                </select> <ArrowDownwardIcon /> </p>
        </div>
    </nav>
    );
}

