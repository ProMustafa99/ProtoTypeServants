import React from 'react';
import { Link } from 'react-router-dom';
import MaidCard from '../components/MaidCard';
import { useMaidContext } from '../context/MaidContext';

const Favorites: React.FC = () => {
  const {
    favorites,
    addToFavorites,
    removeFromFavorites,
    addToWatchLater,
    removeFromWatchLater,
    isInFavorites,
    isInWatchLater
  } = useMaidContext();

  const handleAddToFavorites = (maid: any) => {
    if (isInFavorites(maid.id)) {
      removeFromFavorites(maid.id);
    } else {
      addToFavorites(maid);
    }
  };

  const handleAddToWatchLater = (maid: any) => {
    if (isInWatchLater(maid.id)) {
      removeFromWatchLater(maid.id);
    } else {
      addToWatchLater(maid);
    }
  };

  return (
    <div className="page">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <h1 className="section-title">Your Favorites</h1>
          <p className="section-subtitle">
            Your saved domestic workers for easy access
          </p>
        </div>

        {favorites.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="empty-title">No favorites yet</h2>
            <p className="empty-description">
              Start browsing our domestic workers and add your favorites to this list.
            </p>
            <Link to="/servants" className="button primary">
              Browse Servants
            </Link>
          </div>
        ) : (
          <>
            {/* Stats */}
            <div className="stat-card" style={{ marginBottom: '2rem' }}>
              <div style={{ textAlign: 'center' }}>
                <div className="stat-number red">{favorites.length}</div>
                <div className="stat-label">Favorite Workers</div>
              </div>
            </div>

            {/* Favorites Grid */}
            <div className="grid grid-3">
              {favorites.map((maid) => (
                <MaidCard
                  key={maid.id}
                  maid={maid}
                  onAddToFavorites={handleAddToFavorites}
                  onAddToWatchLater={handleAddToWatchLater}
                  isInFavorites={isInFavorites(maid.id)}
                  isInWatchLater={isInWatchLater(maid.id)}
                />
              ))}
            </div>

            {/* Actions */}
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <Link to="/servants" className="button primary" style={{ marginRight: '1rem' }}>
                Browse More
              </Link>
              <Link to="/watch-later" className="button secondary">
                View Watch Later
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Favorites;
