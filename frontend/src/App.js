import React from 'react';

import Navbar from './components/Navbar/Navbar';
import './App.css';
import Header from './components/Header/Header';
import Title from './components/Dividers/Title';



function App() {
  return (
    
    <div className="App">
      <div><Navbar /></div>
      <div><Title /></div>
      <div className="pageBody"><Header /></div>
    </div>
    
    
  );
}

export default App;
