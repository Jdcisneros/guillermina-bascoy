import { Routes, Route } from "react-router-dom";

import Home from "./views/Home"
import Nav from "./components/Nav";
import Portfolio from "./views/Porfolio";
import Footer from "./components/Footer";
import Socials from "./components/Socials";







function App() {

  return (
      <div>
        <Nav />
        
  <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/portfolio" element={<Portfolio/>} />
        
        
  </Routes>
  <Footer/>
  <Socials />
      </div>
  )
}

export default App
