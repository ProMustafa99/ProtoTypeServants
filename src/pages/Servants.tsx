import React, { useState, useMemo } from 'react';
import MaidCard from '../components/MaidCard';
import MaidSearch from '../components/MaidSearch';
import MaidFilter from '../components/MaidFilter';
import MaidSort, { type SortOption } from '../components/MaidSort';
import { maidsData } from '../data/maids';
import { useMaidContext } from '../context/MaidContext';
import { 
  filterMaids, 
  sortMaids, 
  getDefaultFilters, 
  getMaidStats,
  getTopRatedMaids,
  getMostExperiencedMaids,
  getBestValueMaids
} from '../utils/maidUtils';
import type { MaidFilter as MaidFilterType } from '../types/maid';

const Servants: React.FC = () => {
  const {
    addToFavorites,
    removeFromFavorites,
    addToWatchLater,
    removeFromWatchLater,
    isInFavorites,
    isInWatchLater
  } = useMaidContext();

  // State management
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<MaidFilterType>(getDefaultFilters());
  const [sortBy, setSortBy] = useState<SortOption>('rating-desc');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Filter and sort maids
  const filteredMaids = useMemo(() => {
    const filtered = filterMaids(maidsData, searchQuery, filters);
    return sortMaids(filtered, sortBy);
  }, [searchQuery, filters, sortBy]);

  // Get statistics
  const stats = useMemo(() => getMaidStats(maidsData), []);
  const topRated = useMemo(() => getTopRatedMaids(maidsData, 3), []);
  const mostExperienced = useMemo(() => getMostExperiencedMaids(maidsData, 3), []);
  const bestValue = useMemo(() => getBestValueMaids(maidsData, 3), []);

  // Event handlers
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

  const handleFiltersChange = (newFilters: MaidFilterType) => {
    setFilters(newFilters);
  };

  const handleClearFilters = () => {
    setFilters(getDefaultFilters());
  };

  const handleSearchSubmit = () => {
    // Search is handled automatically by the useMemo
  };

  return (
    <div className="page">
      {/* Hero Section */}
      <div className="hero" style={{ height: 'auto', minHeight: '60vh' }}>
        <div className="container">
          <div className="hero-content" style={{ padding: '4rem 0' }}>
            <h1 className="hero-title" style={{ fontSize: '2.5rem' }}>
              Find Your Perfect Domestic Worker
            </h1>
            <p className="hero-subtitle" style={{ fontSize: '1.125rem' }}>
              Browse through our carefully selected professionals from around the world
            </p>
            
            {/* Stats Cards */}
            <div className="stats-grid" style={{ marginTop: '3rem' }}>
              <div className="stat-card" style={{ background: 'rgba(255, 255, 255, 0.2)', color: 'white' }}>
                <div className="stat-number" style={{ color: 'white' }}>{stats.totalMaids}</div>
                <div className="stat-label" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Available Workers</div>
              </div>
              <div className="stat-card" style={{ background: 'rgba(255, 255, 255, 0.2)', color: 'white' }}>
                <div className="stat-number" style={{ color: 'white' }}>{stats.countries}</div>
                <div className="stat-label" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Countries</div>
              </div>
              <div className="stat-card" style={{ background: 'rgba(255, 255, 255, 0.2)', color: 'white' }}>
                <div className="stat-number" style={{ color: 'white' }}>{stats.avgRating}⭐</div>
                <div className="stat-label" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Avg Rating</div>
              </div>
              <div className="stat-card" style={{ background: 'rgba(255, 255, 255, 0.2)', color: 'white' }}>
                <div className="stat-number" style={{ color: 'white' }}>${stats.avgHourlyRate}</div>
                <div className="stat-label" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Avg Rate/hr</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="container">
          {/* Search and Filter Section */}
          <div className="section">
            <div style={{ marginBottom: '2rem' }}>
              <MaidSearch
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                onSearchSubmit={handleSearchSubmit}
              />
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '2rem', marginBottom: '2rem' }}>
              <div>
                <MaidFilter
                  filters={filters}
                  onFiltersChange={handleFiltersChange}
                  onClearFilters={handleClearFilters}
                />
              </div>
              
              <div>
                <MaidSort
                  sortBy={sortBy}
                  onSortChange={setSortBy}
                  totalResults={filteredMaids.length}
                />
              </div>
            </div>
          </div>

          {/* Featured Sections */}
          {filteredMaids.length === maidsData.length && (
            <div className="section section-gray">
              <div className="section-header">
                <h2 className="section-title">Featured Workers</h2>
              </div>
              
              <div className="grid grid-3">
                {/* Top Rated */}
                <div className="card">
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                      <span style={{ color: '#fbbf24', marginRight: '0.5rem' }}>⭐</span>
                      Top Rated
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {topRated.map((maid) => (
                        <div key={maid.id} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem', borderRadius: '0.5rem', transition: 'background-color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                          <img
                            src={maid.image}
                            alt={maid.name}
                            style={{ width: '3rem', height: '3rem', borderRadius: '50%', objectFit: 'cover' }}
                          />
                          <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: '500', color: '#1f2937' }}>{maid.name}</div>
                            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>{maid.country}</div>
                          </div>
                          <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '0.875rem', fontWeight: '500', color: '#1f2937' }}>${maid.hourlyRate}/hr</div>
                            <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>{maid.rating} ⭐</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Most Experienced */}
                <div className="card">
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                      <span style={{ color: '#2563eb', marginRight: '0.5rem' }}>👥</span>
                      Most Experienced
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {mostExperienced.map((maid) => (
                        <div key={maid.id} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem', borderRadius: '0.5rem', transition: 'background-color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                          <img
                            src={maid.image}
                            alt={maid.name}
                            style={{ width: '3rem', height: '3rem', borderRadius: '50%', objectFit: 'cover' }}
                          />
                          <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: '500', color: '#1f2937' }}>{maid.name}</div>
                            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>{maid.country}</div>
                          </div>
                          <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '0.875rem', fontWeight: '500', color: '#1f2937' }}>{maid.experience} years</div>
                            <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Experience</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Best Value */}
                <div className="card">
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                      <span style={{ color: '#059669', marginRight: '0.5rem' }}>💰</span>
                      Best Value
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {bestValue.map((maid) => (
                        <div key={maid.id} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem', borderRadius: '0.5rem', transition: 'background-color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                          <img
                            src={maid.image}
                            alt={maid.name}
                            style={{ width: '3rem', height: '3rem', borderRadius: '50%', objectFit: 'cover' }}
                          />
                          <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: '500', color: '#1f2937' }}>{maid.name}</div>
                            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>{maid.country}</div>
                          </div>
                          <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '0.875rem', fontWeight: '500', color: '#1f2937' }}>${maid.hourlyRate}/hr</div>
                            <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>{maid.rating} ⭐</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Results Section */}
          <div className="section">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
              <h2 className="section-title" style={{ margin: 0, fontSize: '2rem' }}>
                {filteredMaids.length === maidsData.length 
                  ? 'All Workers' 
                  : `Search Results (${filteredMaids.length})`
                }
              </h2>
              
              {/* View Mode Toggle */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <button
                  onClick={() => setViewMode('grid')}
                  style={{
                    padding: '0.5rem',
                    borderRadius: '0.5rem',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    backgroundColor: viewMode === 'grid' ? '#dbeafe' : '#f3f4f6',
                    color: viewMode === 'grid' ? '#2563eb' : '#6b7280'
                  }}
                >
                  <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  style={{
                    padding: '0.5rem',
                    borderRadius: '0.5rem',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    backgroundColor: viewMode === 'list' ? '#dbeafe' : '#f3f4f6',
                    color: viewMode === 'list' ? '#2563eb' : '#6b7280'
                  }}
                >
                  <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Maid Grid/List */}
            {filteredMaids.length > 0 ? (
              <div className={viewMode === 'grid' ? 'grid grid-3' : ''} style={viewMode === 'list' ? { display: 'flex', flexDirection: 'column', gap: '1rem' } : {}}>
                {filteredMaids.map((maid) => (
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
            ) : (
              <div className="empty-state">
                <div className="empty-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="empty-title">No workers found</h3>
                <p className="empty-description">
                  Try adjusting your search criteria or filters to find more workers.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="button primary"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>

          {/* Call to Action */}
          <div className="section" style={{ background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)', borderRadius: '0.75rem', padding: '3rem 2rem', textAlign: 'center', color: 'white' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Can't find what you're looking for?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '2rem', maxWidth: '32rem', margin: '0 auto 2rem' }}>
              Contact our team and we'll help you find the perfect match for your household needs. 
              We have access to a wider network of qualified professionals.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
              <button className="button primary" style={{ backgroundColor: 'white', color: '#2563eb' }}>
                Contact Us
              </button>
              <button className="button secondary" style={{ border: '2px solid white', backgroundColor: 'transparent', color: 'white' }}>
                Request Custom Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servants;
