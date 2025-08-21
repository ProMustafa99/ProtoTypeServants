import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Maid } from '../types/maid';

interface MaidCardProps {
  maid: Maid;
  onAddToFavorites: (maid: Maid) => void;
  onAddToWatchLater: (maid: Maid) => void;
  isInFavorites: boolean;
  isInWatchLater: boolean;
}

const MaidCard: React.FC<MaidCardProps> = ({
  maid,
  onAddToFavorites,
  onAddToWatchLater,
  isInFavorites,
  isInWatchLater
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % maid.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + maid.gallery.length) % maid.gallery.length);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} style={{ width: '1rem', height: '1rem', color: '#fbbf24' }} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half" style={{ width: '1rem', height: '1rem', color: '#fbbf24' }} fill="currentColor" viewBox="0 0 20 20">
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
        <svg key={`empty-${i}`} style={{ width: '1rem', height: '1rem', color: '#d1d5db' }} fill="currentColor" viewBox="0 0 20 20">
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
    <div className="card maid-card">
      {/* Image Gallery */}
      <div style={{ position: 'relative', height: '16rem', backgroundColor: '#f3f4f6' }}>
        <img
          src={maid.gallery[currentImageIndex]}
          alt={maid.name}
          className="maid-card-image"
        />
        
        {/* Image Navigation */}
        {maid.gallery.length > 1 && (
          <>
            <button
              onClick={prevImage}
              style={{
                position: 'absolute',
                left: '0.5rem',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                borderRadius: '50%',
                padding: '0.5rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'}
            >
              <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextImage}
              style={{
                position: 'absolute',
                right: '0.5rem',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                borderRadius: '50%',
                padding: '0.5rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'}
            >
              <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Image Indicators */}
            <div style={{ position: 'absolute', bottom: '0.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '0.25rem' }}>
              {maid.gallery.map((_, index) => (
                <div
                  key={index}
                  style={{
                    width: '0.5rem',
                    height: '0.5rem',
                    borderRadius: '50%',
                    backgroundColor: index === currentImageIndex ? 'white' : 'rgba(255, 255, 255, 0.5)'
                  }}
                />
              ))}
            </div>
          </>
        )}

        {/* Availability Badge */}
        <div style={{
          position: 'absolute',
          top: '0.75rem',
          right: '0.75rem',
          padding: '0.25rem 0.5rem',
          borderRadius: '9999px',
          fontSize: '0.75rem',
          fontWeight: '500',
          ...availabilityStyle
        }}>
          {maid.availability.replace('-', ' ')}
        </div>

        {/* Action Buttons */}
        <div className="maid-card-actions">
          <button
            onClick={() => onAddToFavorites(maid)}
            className={`action-button ${isInFavorites ? 'active' : ''}`}
          >
            <svg style={{ width: '1rem', height: '1rem' }} fill={isInFavorites ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          <button
            onClick={() => onAddToWatchLater(maid)}
            className={`action-button watch-later ${isInWatchLater ? 'active' : ''}`}
          >
            <svg style={{ width: '1rem', height: '1rem' }} fill={isInWatchLater ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="maid-card-content">
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
          <div>
            <h3 className="maid-card-title">{maid.name}</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#6b7280' }}>
              <span>{maid.age} years</span>
              <span>•</span>
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <svg style={{ width: '1rem', height: '1rem', marginRight: '0.25rem' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {maid.country}
              </span>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#059669' }}>${maid.hourlyRate}/hr</div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Hourly Rate</div>
          </div>
        </div>

        {/* Rating */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <div style={{ display: 'flex' }}>{renderStars(maid.rating)}</div>
          <span style={{ fontSize: '0.875rem', fontWeight: '500', color: '#1f2937' }}>{maid.rating}</span>
          <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>({maid.reviewCount} reviews)</span>
        </div>

        {/* Description */}
        <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem', lineHeight: '1.5' }}>{maid.description}</p>

        {/* Skills */}
        <div style={{ marginBottom: '1rem' }}>
          <h4 style={{ fontSize: '0.875rem', fontWeight: '500', color: '#1f2937', marginBottom: '0.5rem' }}>Skills</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
            {maid.skills.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                style={{
                  padding: '0.25rem 0.5rem',
                  backgroundColor: '#dbeafe',
                  color: '#1e40af',
                  fontSize: '0.75rem',
                  borderRadius: '9999px',
                  fontWeight: '500'
                }}
              >
                {skill}
              </span>
            ))}
            {maid.skills.length > 3 && (
              <span style={{
                padding: '0.25rem 0.5rem',
                backgroundColor: '#f3f4f6',
                color: '#6b7280',
                fontSize: '0.75rem',
                borderRadius: '9999px'
              }}>
                +{maid.skills.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Languages */}
        <div style={{ marginBottom: '1rem' }}>
          <h4 style={{ fontSize: '0.875rem', fontWeight: '500', color: '#1f2937', marginBottom: '0.5rem' }}>Languages</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
            {maid.languages.map((language, index) => (
              <span
                key={index}
                style={{
                  padding: '0.25rem 0.5rem',
                  backgroundColor: '#dcfce7',
                  color: '#166534',
                  fontSize: '0.75rem',
                  borderRadius: '9999px',
                  fontWeight: '500'
                }}
              >
                {language}
              </span>
            ))}
          </div>
        </div>

        {/* Experience & References */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', fontSize: '0.875rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ color: '#6b7280' }}>
              <span style={{ fontWeight: '500' }}>{maid.experience}</span> years experience
            </span>
            <span style={{ color: '#6b7280' }}>
              <span style={{ fontWeight: '500' }}>{maid.references}</span> references
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Link 
            to={`/maid/${maid.id}`}
            className="maid-card-button"
            style={{ flex: 1, textDecoration: 'none', textAlign: 'center' }}
          >
            View Profile
          </Link>
          <button className="maid-card-button" style={{ flex: 1, backgroundColor: '#f3f4f6', color: '#374151' }}>
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default MaidCard;
