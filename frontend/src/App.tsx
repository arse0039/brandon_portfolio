import React, { useState } from 'react';
import { NavBar } from './components/NavBar';
import { navLinks } from './constants/data';
import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';
import ProjectPage from './pages/projectPage';
import TranslucentModalDiv from './components/TranslucentModalDiv';

const App: React.FC = () => {
  const [displayedPage, setDisplayedPage] = useState<string>('Home');
  const [displayModal, setDisplayModal] = useState<boolean>(false);

  const handleLinkClick = (page:string) => {
    setDisplayedPage(page);
  };

  const handleModalClick = () => {
    setDisplayModal((prev) => !prev);
  }

  return (      
    <div>
      {displayModal && <TranslucentModalDiv/>}
      <NavBar navArray={navLinks} handleClick={handleLinkClick}/>

      {displayedPage === 'Home' && <HomePage/>}

      {displayedPage === 'About' && <AboutPage 
        handleModalClick={handleModalClick}/>}
        
      {displayedPage === 'Projects' && <ProjectPage/>}
    </div>
  );
}

export default App;
