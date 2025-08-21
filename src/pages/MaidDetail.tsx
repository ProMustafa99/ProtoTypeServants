import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { maidsData } from '../data/maids';
import { useMaidContext } from '../context/MaidContext';

const MaidDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  
  const {
    addToFavorites,
    removeFromFavorites,
    addToWatchLater,
    removeFromWatchLater,
    isInFavorites,
    isInWatchLater
  } = useMaidContext();

  const maid = maidsData.find(m => m.id === id);

  if (!maid) {
    return (
      <div className="page">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '50vh' }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>Maid not found</h1>
            <Link to="/servants" style={{ color: '#2563eb' }}>
              Back to Servants
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleAddToFavorites = () => {
    if (isInFavorites(maid.id)) {
      removeFromFavorites(maid.id);
    } else {
      addToFavorites(maid);
    }
  };

  const handleAddToWatchLater = () => {
    if (isInWatchLater(maid.id)) {
      removeFromWatchLater(maid.id);
    } else {
      addToWatchLater(maid);
    }
  };

  return (
    <div className="page">
      <div className="container">
        {/* Back Button */}
        <Link to="/servants" className="back-button">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Servants
        </Link>

        <div className="maid-detail-card">
          <div className="maid-detail-content">
            {/* Image Gallery */}
            <div>
              <div className="maid-gallery">
                <img
                  src={maid.gallery[selectedImage]}
                  alt={maid.name}
                  className="maid-gallery-main"
                />
                
                {/* Thumbnail Gallery */}
                <div className="maid-gallery-thumbs">
                  {maid.gallery.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`maid-gallery-thumb ${selectedImage === index ? 'active' : ''}`}
                    >
                      <img
                        src={image}
                        alt={`${maid.name} ${index + 1}`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Maid Information */}
            <div>
              <h1>{maid.name}</h1>
              
              <div className="maid-info">
                <div className="maid-info-item">
                  <span className="maid-info-label">Age:</span>
                  <span className="maid-info-value">{maid.age} years old</span>
                </div>
                <div className="maid-info-item">
                  <span className="maid-info-label">Country:</span>
                  <span className="maid-info-value">{maid.country}</span>
                </div>
                {maid.description && (
                  <div className="maid-description">
                    <span className="maid-description-label">About:</span>
                    <p>{maid.description}</p>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="maid-actions">
                <button
                  onClick={handleAddToFavorites}
                  className={`action-button-large favorite ${isInFavorites(maid.id) ? 'active' : ''}`}
                >
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  {isInFavorites(maid.id) ? 'Remove from Favorites' : 'Add to Favorites'}
                </button>

                <button
                  onClick={handleAddToWatchLater}
                  className={`action-button-large watch-later ${isInWatchLater(maid.id) ? 'active' : ''}`}
                >
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  {isInWatchLater(maid.id) ? 'Remove from Watch Later' : 'Watch Later'}
                </button>

                <button className="action-button-large contact">
                  Contact {maid.name}
                </button>
              </div>

              {/* Additional Info */}
              <div className="maid-additional">
                <h3>What's included:</h3>
                <ul>
                  <li>• Background verification</li>
                  <li>• Reference checks</li>
                  <li>• Skills assessment</li>
                  <li>• Insurance coverage</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaidDetail;
