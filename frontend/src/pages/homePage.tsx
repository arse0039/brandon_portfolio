import React from 'react';
import { AnimatedBackground } from '../components/AnimatedBackground';
import '../styles/homePage.css';

const HomePage: React.FC = () => {
    return (
      <div className="home-page">
        <AnimatedBackground /> 
        <div className="content">
          <h1>Welcome!</h1>
          <div className='home-paragraph'>
            We are Brandon and David, two <span className="rotating-text_1">career-changers </span>
            turned coding enthusiasts who found their passion and purpose for software engineering. <br/>
            We met early during our time at Oregon State and quickly became friends.  <br/>
            Our satisfaction comes not just from solving problems but from the joy of 
            collaborative innovation. <br/>
            We are excited that you are here to explore our journey. <br/>
            As we continue to grow and learn, so does this space. <br/>
            Join us as we continue to build extraordinary things together! <br/>
          </div>
        </div>
      </div>
    );
  };

export default HomePage;