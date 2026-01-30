import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Cybersecurity from "./pages/Cybersecurity";
import WebDevelopment from "./pages/WebDevelopment";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[var(--surface)] text-[var(--text-primary)]">
        <Navbar />

        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/cybersecurity" element={<Cybersecurity />} />
          <Route path="/web-development" element={<WebDevelopment />} />
        </Routes>
      </div>
    </Router>
  );
}
