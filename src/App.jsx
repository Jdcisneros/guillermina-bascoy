import { Routes, Route } from "react-router-dom";

import Home from "./views/Home"
import Nav from "./components/Nav";
import Portfolio from "./views/Porfolio";
import Footer from "./components/Footer";
import ScrollTop from "./components/scrollTop";
import Blogs from "./views/blog";
import Admin from "./components/admin/admin";








function App() {

  return (
      <div className="bg-zinc-50">
        <Nav />
        <ScrollTop/>
        
  <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/portfolio" element={<Portfolio/>} />
  <Route path="/blogs" element={<Blogs/>} />
  <Route path="/admin" element={<Admin/>} />
        
        
  </Routes>
  <Footer/>

      </div>
  )
}

export default App
