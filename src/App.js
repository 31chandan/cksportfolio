import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Resume from "./Pages/Resume";
import { useEffect, useState } from 'react';
import Footer from './Components/Footer';
import SlideToTop from './Pages/SlideToTop';

function App() {
  const [headerStyle, setHeaderStyle] = useState("header");

  useEffect(() => {
    window.addEventListener("scroll", getScrollPosition);

    return () => window.addEventListener("scroll", getScrollPosition);
  }, []);

  const getScrollPosition = () => {
    if (window.scrollY > 5) {
      setHeaderStyle("header_bg")
    } else {
      setHeaderStyle("header")
    }
  };


  return (
    <>
      <Router>
        <div className="app">
          <SlideToTop />
          <Header className={headerStyle} />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/project' element={<Project />} />
            <Route path='/resume' element={<Resume />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
