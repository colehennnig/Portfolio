import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { useState } from "react";
import Home from './components/Home/Home';
import About from "./components/About/About";
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer";
import './assets/fonts/SFMono-Regular.otf';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        {/* <ScrollToTop /> */}
        <div className="overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to="/"/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
