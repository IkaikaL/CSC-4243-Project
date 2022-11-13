import React from 'react';
import TotalReviewMenu from './container/TotalReviewMenu/TotalReviewMenu';
import Navbar from "./components/Navbar/Navbar";
import SortButton from './components/SortButton/SortButton';
import Reviews from './container/Reviews/Reviews';
import './App.css';



const App = () => (
    <div>      
        <Navbar />
        <TotalReviewMenu />
        <SortButton />,
        <Reviews />
    </div>
);

export default App;

