import React, { useState, useRef } from 'react'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HomePage, About, Contact, Projects} from './pages';
import { Navbar } from './components';


function App() {

  return (
    <>
      <Navbar />
      <HomePage />
      <Projects />
      <About />
      <Contact />
      <ToastContainer />
    </>
  );
}

export default App
