import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/styles/index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import { Home } from './pages/Home';
import Experience from './pages/Experience';
import ProjectDisplay from './pages/ProjectDisplay';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route exact path="/" />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/project/:id" element={<ProjectDisplay />} />
    </Routes>
  </BrowserRouter>
);

