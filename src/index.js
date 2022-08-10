import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/styles/index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { Home } from './components/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="projects" element={<Projects />} />
    </Routes>
  </BrowserRouter>
);

