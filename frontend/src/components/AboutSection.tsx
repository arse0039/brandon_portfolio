import React, {useState, useEffect} from 'react';
import '../styles/aboutSection.css'

interface AboutSectionProps {
    name: string;
    
}

const AboutSection: React.FC<AboutSectionProps> = ({name}) => {
    const [visibleName, setVisibleName] = useState<string>('');

    useEffect(() => {
        setVisibleName('')
        const typingAnimation = () => {
            for(let i = 0; i <= name.length; i++) {
                setTimeout(() => {
                    setVisibleName(name.substring(0, i));
                }, i * 100);
            }
        }
        const delay = setTimeout(typingAnimation, 1000);

        return () => clearTimeout(delay);
    },[name]);

    return (
        <div>
            <h1 className='name'>{visibleName}</h1>
        </div>
    )
}

export default AboutSection;