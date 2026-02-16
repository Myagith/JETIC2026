import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingView from './views/LandingView';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* On définit la route racine qui affiche ton LandingView */}
          <Route path="/" element={<LandingView />} />
          
          {/* Tu pourras ajouter d'autres routes ici plus tard, 
              par exemple : <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;