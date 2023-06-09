import React from 'react';
import logo from './logo.svg';
import {Route, Routes} from "react-router-dom"
import './App.css';

import Home from './Components/Home';
import Resume from './Components/Resume';
import NavBar from './Components/NavBar';
import Projects from './Components/Projects';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/resume" element={<Resume/>}/>
      </Routes>
    </>
  );
}

export default App;
