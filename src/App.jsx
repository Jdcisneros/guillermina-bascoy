import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./views/Home"
import Nav from "./components/Nav";
import Portfolio from "./views/Porfolio";
import Footer from "./components/Footer";
import ScrollTop from "./components/scrollTop";
import Blogs from "./views/blog";
import Admin from "./views/admin/admin";

function App() {
  const location = useLocation();
  const isAdminPage = location.pathname === '/admin';

  return (
    <div className="bg-zinc-50">
      {!isAdminPage && <Nav />}
      <ScrollTop />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

      {!isAdminPage && <Footer />}
    </div>
  )
}

export default App
