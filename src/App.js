import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cargo from './pages/Cargo';
import Construction from './pages/Construction';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import Manufacture from './pages/Manufacture';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cargo" element={<Cargo />} />
            <Route path="/construction" element={<Construction />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/manufacture" element={<Manufacture />} /> 
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
