
import Nav from "./components/Nav/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Video from "./components/video/video";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
  
    </div>
  );
}

export default App;
