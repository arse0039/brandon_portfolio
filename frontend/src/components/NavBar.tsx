import React from 'react';
import '../styles/navbar.css';

interface NavBarProps {
    navArray:string[];
};

export const NavBar = ( {navArray}:NavBarProps) => {
    return (
        <nav className='Nav-bar'>
            <ul className='Nav-list'>
                {navArray.map((ele) => {
                    return <li key={ele}><a href={ele}>{ele}</a></li>
                })}
            </ul>
        </nav>
    )
}