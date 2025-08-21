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

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} style={{ width: '1.25rem', height: '1.25rem', color: '#fbbf24' }} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half" style={{ width: '1.25rem', height: '1.25rem', color: '#fbbf24' }} fill="currentColor" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="halfStar">
              <stop offset="50%" stopColor="#fbbf24" />
              <stop offset="50%" stopColor="#e5e7eb" />
            </linearGradient>
          </defs>
          <path fill="url(#halfStar)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} style={{ width: '1.25rem', height: '1.25rem', color: '#d1d5db' }} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    return stars;
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'full-time':
        return { background: '#dcfce7', color: '#166534' };
      case 'part-time':
        return { background: '#dbeafe', color: '#1e40af' };
      case 'flexible':
        return { background: '#f3e8ff', color: '#7c3aed' };
      default:
        return { background: '#f3f4f6', color: '#374151' };
    }
  };

  const availabilityStyle = getAvailabilityColor(maid.availability);

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
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>{maid.name}</h1>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#059669' }}>${maid.hourlyRate}/hr</div>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Hourly Rate</div>
                </div>
              </div>

              {/* Rating */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <div style={{ display: 'flex' }}>{renderStars(maid.rating)}</div>
                <span style={{ fontSize: '1rem', fontWeight: '500', color: '#1f2937' }}>{maid.rating}</span>
                <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>({maid.reviewCount} reviews)</span>
              </div>

              {/* Availability Badge */}
              <div style={{
                display: 'inline-block',
                padding: '0.25rem 0.75rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: '500',
                marginBottom: '1rem',
                ...availabilityStyle
              }}>
                {maid.availability.replace('-', ' ')}
              </div>
              
              <div className="maid-info">
                <div className="maid-info-item">
                  <span className="maid-info-label">Age:</span>
                  <span className="maid-info-value">{maid.age} years old</span>
                </div>
                <div className="maid-info-item">
                  <span className="maid-info-label">Country:</span>
                  <span className="maid-info-value">{maid.country}</span>
                </div>
                <div className="maid-info-item">
                  <span className="maid-info-label">Experience:</span>
                  <span className="maid-info-value">{maid.experience} years</span>
                </div>
                <div className="maid-info-item">
                  <span className="maid-info-label">References:</span>
                  <span className="maid-info-value">{maid.references} verified</span>
                </div>
                {maid.description && (
                  <div className="maid-description">
                    <span className="maid-description-label">About:</span>
                    <p>{maid.description}</p>
                  </div>
                )}
              </div>

              {/* Skills */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem' }}>Skills</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {maid.skills.map((skill, index) => (
                    <span
                      key={index}
                      style={{
                        padding: '0.5rem 1rem',
                        backgroundColor: '#dbeafe',
                        color: '#1e40af',
                        fontSize: '0.875rem',
                        borderRadius: '9999px',
                        fontWeight: '500'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem' }}>Languages</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {maid.languages.map((language, index) => (
                    <span
                      key={index}
                      style={{
                        padding: '0.5rem 1rem',
                        backgroundColor: '#dcfce7',
                        color: '#166534',
                        fontSize: '0.875rem',
                        borderRadius: '9999px',
                        fontWeight: '500'
                      }}
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>

              {/* Specializations */}
              {maid.specializations && maid.specializations.length > 0 && (
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem' }}>Specializations</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {maid.specializations.map((specialization, index) => (
                      <span
                        key={index}
                        style={{
                          padding: '0.5rem 1rem',
                          backgroundColor: '#fef3c7',
                          color: '#92400e',
                          fontSize: '0.875rem',
                          borderRadius: '9999px',
                          fontWeight: '500'
                        }}
                      >
                        {specialization}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Certifications */}
              {maid.certifications && maid.certifications.length > 0 && (
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem' }}>Certifications</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {maid.certifications.map((certification, index) => (
                      <div
                        key={index}
                        style={{
                          padding: '0.75rem',
                          backgroundColor: '#f8fafc',
                          border: '1px solid #e2e8f0',
                          borderRadius: '0.5rem',
                          fontSize: '0.875rem',
                          color: '#374151'
                        }}
                      >
                        ✓ {certification}
                      </div>
                    ))}
                  </div>
                </div>
              )}

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
                  <li>• 24/7 support</li>
                  <li>• Satisfaction guarantee</li>
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
