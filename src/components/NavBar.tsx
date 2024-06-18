import React, { useState } from 'react';
import '../styles/navbar.css';
import { NavLink } from '../constants/data';

interface NavBarProps {
    navArray:NavLink[];
    handleClick: (page:string) => void;
};

export const NavBar:React.FC<NavBarProps>= ( {navArray, handleClick} ) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    const toggleMobile = () => {
        setIsMobile((prev) => !prev);
    };

    return (
        <nav className='nav-bar'>
            <div className='nav-logo'>BA</div>
            <div className='hamburger-icon' onClick={toggleMobile}>
                ☰
            </div>
            <ul className={`nav-list ${isMobile ? 'show-mobile':''}`}>
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