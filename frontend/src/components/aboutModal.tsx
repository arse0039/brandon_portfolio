import React from 'react';
import '../styles/aboutModal.css';

interface AboutModalProps {
    handleModalClose: (name:string) => void;
    davidClicked: boolean;
    brandonClicked: boolean;
}

const AboutModal = ({davidClicked, brandonClicked, handleModalClose}: AboutModalProps) => {

    const isExpanded = davidClicked || brandonClicked;

    const handleExitButtonClick = () => {
        davidClicked ? handleModalClose('david'):handleModalClose('brandon');
    };

    return (
        <div className={`expandingDiv ${isExpanded ? 'expanded' : ''}`}>
            <button className='exit-button' onClick={handleExitButtonClick}> X </button>
            <h1>This is the inner div!</h1>
        </div>
    )
};

export default AboutModal;

