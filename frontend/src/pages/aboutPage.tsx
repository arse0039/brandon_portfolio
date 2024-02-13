import React, { useState } from 'react';
import '../styles/aboutPage.css';
import brandonImage from '../assets/BArsenault.jpg';
import davidImage from '../assets/DClaphan.jpg';



const AboutPage: React.FC = () => {
    const [davidClick, setDavidClick] = useState<boolean>(false);
    const [brandonClick, setBrandonClick] = useState<boolean>(false);

    const handleAvatarClick = ( event: React.MouseEvent<HTMLDivElement> ) => {
        event.currentTarget.id.includes('david') ? setDavidClick((prev) => !prev) : setBrandonClick((prev) => !prev);
    }

    return (
        <div id='about-outer-div'>
            <div className='about-individual'>
                <div id={`avatar-david${davidClick ? '-clicked':''}`} className='avatar-div' onClick={handleAvatarClick} >
                    <img className='circular-avatar-image' src={davidImage} alt='David'/>
                </div>
            </div>
            <div className='about-individual'>
                <div id={`avatar-brandon${brandonClick ? '-clicked':''}`} className='avatar-div' onClick={handleAvatarClick}>
                    <img className='circular-avatar-image' src={brandonImage} alt='Brandon'/>
                </div>
            </div>
        </div>
    )
};

export default AboutPage;