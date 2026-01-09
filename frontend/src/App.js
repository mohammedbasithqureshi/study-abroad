import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Scholarship from "./pages/Scholarship";
import ScholarshipDetails from "./pages/ScholarshipDetails";
import Admin from "./pages/Admin"; // ✅ Admin page

function App() {
  return (
    <BrowserRouter>
      {/* App layout */}
      <div className="app-layout">
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/scholarship" element={<Scholarship />} />
            <Route path="/scholarship/:id" element={<ScholarshipDetails />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
