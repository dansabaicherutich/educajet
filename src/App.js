import React from "react";
import Landingpage from "./components/Landingpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
