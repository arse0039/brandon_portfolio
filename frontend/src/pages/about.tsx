import React, {useState,  CSSProperties } from 'react';
import brandonImage from '../assets/BArsenault.jpg';



const AboutPage: React.FC = () => {
    const [boxShadow, setBoxShadow] = useState<string>('none');
    const [boxPosition, setBoxPosition] = useState<string>('translateX(0) scale(1)');

    const outerStyle = {
        backgroundColor: '#0B1412',
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    }

    const styleTest: CSSProperties = {
        display: 'flex',
        backgroundColor: '#fff',
        margin: '15px 0',
        borderRadius: '50%', 
        width: 350,
        height: 350,
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'box-shadow 0.3s ease-in-out, transform 0.8s ease-in-out', 
        boxShadow: boxShadow, 
        transform: boxPosition,
        cursor: 'pointer',
        overflow: 'hidden',
      };

      const circularImage: CSSProperties = {
        width: '100%',
        height: 'auto',
        display: 'block',
        border: '1px solid #282c34',
      }
    
      const handleHover = () => {
        setBoxShadow('0 0 35px 15px rgba(0, 113, 113, 0.8)'); 
      };
    
      const handleLeave = () => {
        setBoxShadow('none'); 
      };

    const handleClick = () => {
        setBoxPosition('translateX(-200px) scale(0.5)');
    };

    const handleExit = () => {
        setBoxPosition('translateX(0px) scale(1)');
    }

    return (
        <div style={outerStyle}>
            <div className='aboutDavid'>
                <div style={styleTest} onMouseOver={handleHover} onMouseLeave={handleLeave} onClick={handleClick} className='davidPhoto'>
                    David Photo Here
                </div>
            </div>
            <div className='aboutBrandon'>
                <div style={styleTest} onMouseOver={handleHover} onMouseLeave={handleLeave} onClick={handleExit} className='brandonPhoto'>
                    <img style={circularImage} src={brandonImage}/>
                </div>
            </div>
        </div>
    )
};

export default AboutPage;