import { Routes, Route } from 'react-router-dom';

import  Header  from "./component/Header/Header";
import  Home  from "./pages/Home/Home";
import  About  from "./pages/About/About";
import  Portfolio  from "./pages/Portfolio/Portfolio";
import  Contact  from "./pages/Contact/Contact";
import Footer from './component/Footer/Footer';
import { useState } from 'react';
import Project from './pages/Project/Project';

function App() {

  const [ isDark, setIsDark ] = useState(false);

  return (
    <div id="box">
      <Header isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      <main id="main-content" data-theme={isDark ? "dark" : "light"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
