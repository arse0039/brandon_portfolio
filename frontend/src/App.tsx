import React from 'react';
import { NavBar } from './components/NavBar';
import { navLinks } from './constants/data';
import AboutPage from './pages/about';
import './App.css';

const App: React.FC = () => {
  return (
    <div >
      <NavBar navArray={navLinks}/>
      <AboutPage />
    </div>
  );
}

export default App;
