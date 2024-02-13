import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { navLinks } from './constants/data';
import AboutPage from './pages/aboutPage';
import HomePage from './pages/homePage';
import ProjectPage from './pages/projectPage';


const App: React.FC = () => {
  return (
    <div>
      <NavBar navArray={navLinks}/>
      <Router>
        <Routes>
          <Route path='/'  Component={HomePage} />
          <Route path='/home'  Component={HomePage} />
          <Route path='/about'  Component={AboutPage} />
          <Route path='/projects'  Component={ProjectPage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
