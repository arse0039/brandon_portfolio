import React, {useState} from 'react';
import { AnimatedBackground } from '../components/AnimatedBackground';
import AboutModal from '../components/aboutModal';
import brandonImage from "../assets/BArsenault.jpg";
import '../styles/homePage.css';

const HomePage = ({handleModalClick}:{handleModalClick: () => void;}) => {
  const [brandonClick, setBrandonClick] = useState<boolean>(false);

  const handleAvatarClick = (event: React.MouseEvent<HTMLDivElement>) => {
    handleModalClick();
    setBrandonClick(true);
  };

  const handleModalClose = (): void => {
    setBrandonClick(false);
    handleModalClick();
  };

    return (
      <div className="home-page">
        <AnimatedBackground />
        <div className="main-content">
          <div className="content">
            <h1>You're here!</h1>
            <div className='home-paragraph'>
              <p> I'm Brandon, a career-changer turned coding enthusiasts 
              who found a passion and purpose for software engineering. </p>
              <p> I love to build, collaborate, <span id='home-emphasis'>learn</span>, and grow. </p>
              <p> I am are excited that you are here to to explore my journey and see some of the work I have done! </p>
            </div>
          </div>
          <AboutModal
              brandonClicked={brandonClick}
              handleModalClose={handleModalClose}
              />
          <div className="profile-content">
              <div className="about-individual">
                <div
                  id={`avatar-brandon${brandonClick ? "-clicked" : ""}`}
                  className="avatar-div"
                  onClick={handleAvatarClick}
                >
                  <img
                    className="circular-avatar-image"
                    src={brandonImage}
                    alt="Brandon"
                  />
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  };

export default HomePage;