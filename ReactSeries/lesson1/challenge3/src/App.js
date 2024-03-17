import {Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CreateUser from "./components/CreateUser";
import UpdateUser from "./components/UpdateUser";
import Home from "./components/Home";
import ReadUser from "./components/ReadUser";
import DeleteUser from "./components/DeleteUser";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/update/:userId" element={<UpdateUser />} />
        <Route path="/read/:userId" element={<ReadUser />} />
        <Route path="/delete/:userId" element={<DeleteUser />} />
      </Routes>
    
    </div>
  );
}

export default App;
