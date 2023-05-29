// Rest Countries API with colour theme switcher that:
//   -Fetches country Data from an API
//   -Filters data according to regions
//   -Has a dar and light mode
//   - Allows the user to search
//   - Displays country details in a modal when clicked


import React, { useState } from 'react';
import Fetch from './components/fetch';
import './App.css';


const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`main-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <header>
        <h1>Where in the World?</h1>
        <button className="button" onClick={toggleDarkMode}>{darkMode ? 'Dark Mode' : 'Light Mode'} </button>
      </header>
      <Fetch />
    </div>
  );
};

export default App;
