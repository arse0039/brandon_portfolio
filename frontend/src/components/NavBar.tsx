import React from 'react';
import '../styles/navbar.css';
import { NavLink } from '../constants/data';

interface NavBarProps {
    navArray:NavLink[];
    handleClick: (page:string) => void;
};

export const NavBar:React.FC<NavBarProps>= ( {navArray, handleClick} ) => {
    return (
        <nav className='Nav-bar'>
            <ul className='Nav-list'>
                {navArray.map((ele, i) => {
                    console.log(ele)
                    return (
                    <li key={i} onClick={() => handleClick(ele.name)}>                        
                        {ele.name}
                    </li>
                )})}
            </ul>
        </nav>
    )
}