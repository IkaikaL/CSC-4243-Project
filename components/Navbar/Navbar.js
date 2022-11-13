import './Navbar.css';
import SearchBar from './SearchBar/search';

export default function Navbar(){
    return (
        <nav className= "nav">
            <a href = "/" className = "site-title"> Calvin's Catalog </a>
            
            <>  <SearchBar />   </>
            <ul>
                <li className = "active"> <a href = "/chatmenu"> Chat </a></li>
                <li> <a href = "/listings"> Listings </a></li>
            </ul>
        </nav>
    )
}