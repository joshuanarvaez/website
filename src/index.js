import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import './about.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import App from './App';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import { Home } from './components/Home';
import { Footer } from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="portfolio" element={<Portfolio />} />
    </Routes>
  </BrowserRouter>
);

