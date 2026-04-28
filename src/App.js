import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Gallery from "./Components/Gallery";
import About from "./Components/About";
import Contact from "./Components/Contact";
import AdoptForm from "./Components/AdoptForm";
import Login from "./Components/Login";
import Signup from "./Components/SignUp";
import AdminPanel from "./Components/AdminPanel";
import PetRequests from "./Components/PetRequests";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Gallery" element={<Gallery />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/AdoptForm" element={<AdoptForm />} />
         <Route exact path="/Login" element={<Login />} />
         <Route exact path="/SignUp" element={<Signup />} />
         <Route exact path="/AdminPanel" element={<AdminPanel/>}/>
         <Route exact path="/PetRequests" element={<PetRequests/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
