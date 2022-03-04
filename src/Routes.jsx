import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import LogIn from "./components/pages/LogIn";

export function AppRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/login" element={<LogIn />} exact />
        </Routes>
      </Router>
    </>
  );
}
