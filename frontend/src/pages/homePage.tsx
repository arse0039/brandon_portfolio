import React from 'react';
import { AnimatedBackground } from '../components/AnimatedBackground';
import '../styles/homePage.css';

const HomePage: React.FC = () => {
    return (
      <div className="home-page">
        <AnimatedBackground /> 
        <div className="content">
          <h1>Welcome to our website!</h1>
          <p> We are best buds and we went to school together. </p>
          <p> Now we are sad because we can't find jobs. </p>
          <p> Hire us, please.</p>
          <p> Thanks! </p>
        </div>
      </div>
    );
  };

export default HomePage;