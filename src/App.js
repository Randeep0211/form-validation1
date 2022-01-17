import React from "react";
import "./App.css";
import Signup from "./Signup";

import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, Link } from "react-router-dom";
import Logged from "./Logged";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App mt-5">
      <h1 className="h">Signup Form</h1>
      <img className="rocket" src={"/rocket1.jpg"} alt="image" />

      <Routes>
        <Route exact path="/" element={<Signup></Signup>}></Route>
        <Route path="/login" element={<Logged />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
