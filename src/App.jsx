import { Routes, Route } from 'react-router-dom';

import  Header  from "./component/Header/Header";
import  Home  from "./component/Home/Home";
import  About  from "./component/About/About";
import  Portfolio  from "./component/Portfolio/Portfolio";
import  Contact  from "./component/Contact/Contact";
import Footer from './component/Footer/Footer';
import { useState } from 'react';

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
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
