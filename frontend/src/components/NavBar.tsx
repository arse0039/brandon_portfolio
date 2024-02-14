import React from 'react';
import '../styles/navbar.css';

interface NavBarProps {
    navArray:string[];
    handleClick: (page:string) => void;
};

export const NavBar = ( {navArray, handleClick}:NavBarProps) => {
    return (
        <nav className='Nav-bar'>
            <ul className='Nav-list'>
                {navArray.map((ele) => {
                    return <li key={ele} onClick={() => handleClick(ele)}>{ele}</li>
                })}
            </ul>
        </nav>
    )
}