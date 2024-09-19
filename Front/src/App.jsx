import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Carte from './Carte';
import Graphique from './Graphique';
import Accueil from './Accueil';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <Router>
      <Header />
      <Routes>  
      <Route path="/" element={<Accueil/>}/>
      <Route path="/accueil" element={<Accueil/>}/>
        <Route path="/carte" element={<Carte />} />
        <Route path="/graphique" element={<Graphique />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;