import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/HomePage/HomePage";

import { BrowserRouter as Router } from 'react-router-dom';

import "./index.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <HomePage />
    </Router>
  )
}

export default App;