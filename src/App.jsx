import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {


  return (
    <>
      <BrowserRouter>
        <ToastContainer position="top-center" />
      </BrowserRouter>
    </>
  );
}

export default App
