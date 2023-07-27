import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import React from "react";
import Home from "./Home";
import Destination from "./Destination";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import About from "./About";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/destination" element={<Destination />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App