import './App.css';
import React, { useState, useEffect } from 'react';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './Navbar';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
