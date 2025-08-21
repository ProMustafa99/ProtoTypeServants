import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMaidContext } from '../context/MaidContext';

const Navigation: React.FC = () => {
  const location = useLocation();
  const { favorites, watchLater } = useMaidContext();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-content">
          <Link to="/" className="nav-brand">
            MaidMatch
          </Link>
          
          <div className="nav-links">
            <Link
              to="/"
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              Home
            </Link>
            
            <Link
              to="/servants"
              className={`nav-link ${isActive('/servants') ? 'active' : ''}`}
            >
              Servants
            </Link>
            
            <Link
              to="/favorites"
              className={`nav-link ${isActive('/favorites') ? 'active' : ''}`}
            >
              Favorites
              {favorites.length > 0 && (
                <span className="nav-badge">
                  {favorites.length}
                </span>
              )}
            </Link>
            
            <Link
              to="/watch-later"
              className={`nav-link ${isActive('/watch-later') ? 'active' : ''}`}
            >
              Watch Later
              {watchLater.length > 0 && (
                <span className="nav-badge orange">
                  {watchLater.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
