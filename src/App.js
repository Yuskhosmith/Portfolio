import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Work from "./pages/work";
import PageLayout from "./components/page-layout";
import About from "./pages/about";

function App() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<PageLayout />}
      >
        <Route
          index
          element={<Home />}
        />
        <Route
          path="work"
          element={<Work />}
        />
        <Route
          path="about"
          element={<About />}
        />
        <Route
          path="contact"
          element={<About />}
        />
      </Route>
    </Routes>
  );
}

export default App;
