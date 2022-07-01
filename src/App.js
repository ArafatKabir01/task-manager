
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Manue from './pages/Header/Manue';

function App() {
  return (
    <div className="App">
      <Manue></Manue>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>

    </div>
  );
}

export default App;
