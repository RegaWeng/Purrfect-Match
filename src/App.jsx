// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyNavbar from './components/Navbar';
import Homepage from './components/Homepage';
import Quicksearch from './components/Quicksearch';
import Adopt from './components/Adopt';
import Grooming from './components/Grooming';
import Healthcare from './components/Healthcare';
import Kitten from './components/Kitten';
import Accessories from './components/Accessories';
import './App.css';

function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Quicksearch" element={<Quicksearch />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/grooming" element={<Grooming />} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/kitten" element={<Kitten />} />
        <Route path="/accessories" element={<Accessories />} />
      </Routes>
    </Router>
  );
}

export default App;
