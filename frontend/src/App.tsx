import React from 'react';
import { NavBar } from './components/NavBar';
import { navLinks } from './constants/data';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar navArray={navLinks}/>
      <div className="App-header">
        <p>
          This will be a portfolio site one day.
        </p>
      </div>
    </div>
  );
}

export default App;
