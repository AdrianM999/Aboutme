import './App.css';
import AboutMe from './Pages/AboutMe';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import Certificates from './Pages/Certificates';
import { Route, Routes } from 'react-router-dom';
import Loader from './Pages/Loader';

import {  useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [isLoading] = useState(true); 



  return (
    <>
    <div>{isLoading && <Loader />}</div>
      
      <div className={isLoading ? 'blur-background' : ''}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Certificates" element={<Certificates />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
