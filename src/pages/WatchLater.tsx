import React from 'react';
import { Link } from 'react-router-dom';
import MaidCard from '../components/MaidCard';
import { useMaidContext } from '../context/MaidContext';

const WatchLater: React.FC = () => {
  const {
    watchLater,
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
          <h1 className="section-title">Watch Later</h1>
          <p className="section-subtitle">
            Domestic workers you've saved to review later
          </p>
        </div>

        {watchLater.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="empty-title">No saved workers</h2>
            <p className="empty-description">
              Add domestic workers to your watch later list to review them when you have time.
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
                <div className="stat-number orange">{watchLater.length}</div>
                <div className="stat-label">Saved for Later</div>
              </div>
            </div>

            {/* Watch Later Grid */}
            <div className="grid grid-3">
              {watchLater.map((maid) => (
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
              <Link to="/favorites" className="button red">
                View Favorites
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WatchLater;
