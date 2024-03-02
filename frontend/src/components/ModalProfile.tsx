import React, {useState, useEffect} from 'react';
import { Profile } from '../constants/data';
import '../styles/modalProfile.css';

interface ModalProfile {
    bio: Profile;
    isExpanded: boolean;
}

export const ModalProfile:React.FC<ModalProfile> = ({bio, isExpanded}) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        if(isExpanded) {
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, 1000);

        return () => clearTimeout(timer);
        } else {
            setIsVisible(false);
        }
    }, [isExpanded])

    return (
        <div className={`modal-bio ${isVisible ? 'fade' : ''}`}>
            <h2>About</h2>
            <p className='modal-med-heading'>{bio.intro}</p>
            <h2>Experience</h2>
            <p className='modal-med-heading'>{bio.experience}</p>
            <h2>Skills</h2>
            <div className='modal-skills-div'> {
                bio.skills.map((ele, index) => (
                    <p key={index} className='modal-skills-text'>{ele}</p>
                ))
                }       
            </div>
            <h2>Education</h2>
            <p className='modal-med-heading'>{bio.education.school}</p>
            <p className='modal-sm-text'>{bio.education.schoolInfo}</p>
            <h2 >Links</h2>
            <p className='modal-med-heading'>{bio.links}</p>
        </div>
    )
}