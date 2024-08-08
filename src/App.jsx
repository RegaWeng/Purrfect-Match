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
import CatRange from './pages/CatRange';
import Services from './components/Services';  // Import the Services component
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <MyNavbar />
      <div className="App">
        <main className="main-content">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/quicksearch" element={<Quicksearch />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/grooming" element={<Grooming />} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/kitten" element={<Kitten />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/Services" element={<Services />} /> 
        <Route path="/CatRange" element={<CatRange />} />
      </Routes>
      <Footer />
      </main>
      </div>
    </Router>
  );
}

export default App;
