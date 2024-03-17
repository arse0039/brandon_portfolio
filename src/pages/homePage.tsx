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
            <p> We are Brandon and David, two career-changers turned coding enthusiasts 
            who found our passion and purpose for software engineering. </p>
            <p> We met early during our time at Oregon State and quickly became friends, finding 
              satisfaction from solving problems and from the joy of collaborative innovation. </p>
            <p> We are excited that you are here to explore our journey and, as 
              we continue to grow and learn, so does this space. </p>
            <p>Join us as we continue to build <span id='home-emphasis'>extraordinary</span> things together! </p>
          </div>
        </div>
      </div>
    );
  };

export default HomePage;