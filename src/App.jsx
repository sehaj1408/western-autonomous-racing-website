import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/HomePage/HomePage";
import ContactPage from "./Components/ContactPage/ContactPage";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./index.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
      </Routes>
    </Router>
  )
}

export default App;