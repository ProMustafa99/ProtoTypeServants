
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MaidProvider } from './context/MaidContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Servants from './pages/Servants';
import MaidDetail from './pages/MaidDetail';
import Favorites from './pages/Favorites';
import WatchLater from './pages/WatchLater';

function App() {
  return (
    <MaidProvider>
      <Router>
        <div className="page">
          <Navigation />
          <main className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/servants" element={<Servants />} />
              <Route path="/maid/:id" element={<MaidDetail />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/watch-later" element={<WatchLater />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </MaidProvider>
  );
}

export default App;
