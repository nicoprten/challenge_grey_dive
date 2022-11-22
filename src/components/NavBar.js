import { Link } from "react-router-dom";
import { List } from "phosphor-react";

import './NavBar.scss';

export default function NavBar(){

    return(
        <div className='navbar-container'>
            <h1 className='navbar-title'>GreyDive</h1>
            <Link className='navbar-logo' to='/'>
                <img src='./logo.png' alt='Simula cr. logo' />
            </Link>
            <List className='navbar-menu-icon' size={36} />
        </div>
    )
}