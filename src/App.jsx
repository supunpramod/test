import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Home from "./pages/home"; 
import SignUp from "./pages/signup"; // Adjust the import path based on your project structure

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Home />} /> 
       < Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
