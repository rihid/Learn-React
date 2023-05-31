import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Feed from "./components/Feed";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Feed />} ></Route>
      </Routes>
    </>
  );
}

export default App;
