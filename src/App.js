import React from "react";
import "./App.css";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Toaster from "./components/Toaster";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Protected from "./components/Protected";
import External from "./components/External";

function App() {
  return (
    <>
      <div className="main">
        <Toaster />
        <Navbar />

        <Routes>
          <Route path="/" element={<About />} />
          <Route
            path="/contact"
            element={
              <Protected>
                <Contact />
              </Protected>
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/external" element={<External />} />
          <Route
            path="/profile"
            element={
              <Protected>
                <Profile />
              </Protected>
            }
          />
          <Route
            path="/home"
            element={
              <Protected>
                <Home />
              </Protected>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
