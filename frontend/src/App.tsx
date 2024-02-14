import React, { useState } from 'react';
import { NavBar } from './components/NavBar';
import { navLinks } from './constants/data';
import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';
import ProjectPage from './pages/projectPage';

const App: React.FC = () => {
  const [displayedPage, setDisplayedPage] = useState<string>('home');

  const handleLinkClick = (page:string) => {
    setDisplayedPage(page);
  };

  return (
      <div>
        <NavBar navArray={navLinks} handleClick={handleLinkClick}/>
        {displayedPage === 'Home' && <HomePage/>}
        {displayedPage === 'About' && <AboutPage/>}
        {displayedPage === 'Projects' && <ProjectPage/>}
      </div>
  );
}

export default App;
