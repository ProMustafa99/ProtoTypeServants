import React, { useState } from 'react';
import type { MaidFilter } from '../types/maid';
import { availableCountries, availableSkills, availableLanguages } from '../data/maids';

interface MaidFilterProps {
  filters: MaidFilter;
  onFiltersChange: (filters: MaidFilter) => void;
  onClearFilters: () => void;
}

const MaidFilter: React.FC<MaidFilterProps> = ({
  filters,
  onFiltersChange,
  onClearFilters
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleFilterChange = (key: keyof MaidFilter, value: any) => {
    onFiltersChange({
      ...filters,
      [key]: value
    });
  };

  const handleMultiSelectChange = (key: keyof MaidFilter, value: string, checked: boolean) => {
    const currentValues = filters[key] as string[];
    const newValues = checked
      ? [...currentValues, value]
      : currentValues.filter(v => v !== value);
    
    handleFilterChange(key, newValues);
  };

  const handlePriceRangeChange = (min: number, max: number) => {
    handleFilterChange('priceRange', [min, max]);
  };

  const clearAllFilters = () => {
    onClearFilters();
  };

  const getActiveFilterCount = () => {
    let count = 0;
    if (filters.countries.length > 0) count++;
    if (filters.skills.length > 0) count++;
    if (filters.availability.length > 0) count++;
    if (filters.languages.length > 0) count++;
    if (filters.experience > 0) count++;
    if (filters.priceRange[0] > 0 || filters.priceRange[1] < 50) count++;
    return count;
  };

  return (
    <div className="card">
      {/* Filter Header */}
      <div style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <svg style={{ width: '1.25rem', height: '1.25rem', color: '#6b7280' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
            </svg>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937' }}>Filters</h3>
            {getActiveFilterCount() > 0 && (
              <span style={{
                backgroundColor: '#dbeafe',
                color: '#1e40af',
                fontSize: '0.75rem',
                fontWeight: '500',
                padding: '0.25rem 0.5rem',
                borderRadius: '9999px'
              }}>
                {getActiveFilterCount()} active
              </span>
            )}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {getActiveFilterCount() > 0 && (
              <button
                onClick={clearAllFilters}
                style={{
                  fontSize: '0.875rem',
                  color: '#dc2626',
                  fontWeight: '500',
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#b91c1c'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#dc2626'}
              >
                Clear all
              </button>
            )}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              style={{
                color: '#6b7280',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#374151'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}
            >
              <svg
                style={{
                  width: '1.25rem',
                  height: '1.25rem',
                  transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s'
                }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Filter Content */}
      {isExpanded && (
        <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Countries */}
          <div>
            <h4 style={{ fontSize: '0.875rem', fontWeight: '500', color: '#1f2937', marginBottom: '0.75rem' }}>Countries</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              {availableCountries.map((country) => (
                <label key={country} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={filters.countries.includes(country)}
                    onChange={(e) => handleMultiSelectChange('countries', country, e.target.checked)}
                    style={{
                      borderRadius: '0.25rem',
                      border: '1px solid #d1d5db',
                      color: '#2563eb',
                      cursor: 'pointer'
                    }}
                  />
                  <span style={{ fontSize: '0.875rem', color: '#374151' }}>{country}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h4 style={{ fontSize: '0.875rem', fontWeight: '500', color: '#1f2937', marginBottom: '0.75rem' }}>Skills</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', maxHeight: '8rem', overflowY: 'auto' }}>
              {availableSkills.map((skill) => (
                <label key={skill} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={filters.skills.includes(skill)}
                    onChange={(e) => handleMultiSelectChange('skills', skill, e.target.checked)}
                    style={{
                      borderRadius: '0.25rem',
                      border: '1px solid #d1d5db',
                      color: '#2563eb',
                      cursor: 'pointer'
                    }}
                  />
                  <span style={{ fontSize: '0.875rem', color: '#374151' }}>{skill}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div>
            <h4 style={{ fontSize: '0.875rem', fontWeight: '500', color: '#1f2937', marginBottom: '0.75rem' }}>Availability</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {['full-time', 'part-time', 'flexible'].map((availability) => (
                <label key={availability} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={filters.availability.includes(availability)}
                    onChange={(e) => handleMultiSelectChange('availability', availability, e.target.checked)}
                    style={{
                      borderRadius: '0.25rem',
                      border: '1px solid #d1d5db',
                      color: '#2563eb',
                      cursor: 'pointer'
                    }}
                  />
                  <span style={{ fontSize: '0.875rem', color: '#374151', textTransform: 'capitalize' }}>{availability.replace('-', ' ')}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h4 style={{ fontSize: '0.875rem', fontWeight: '500', color: '#1f2937', marginBottom: '0.75rem' }}>Languages</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', maxHeight: '8rem', overflowY: 'auto' }}>
              {availableLanguages.map((language) => (
                <label key={language} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={filters.languages.includes(language)}
                    onChange={(e) => handleMultiSelectChange('languages', language, e.target.checked)}
                    style={{
                      borderRadius: '0.25rem',
                      border: '1px solid #d1d5db',
                      color: '#2563eb',
                      cursor: 'pointer'
                    }}
                  />
                  <span style={{ fontSize: '0.875rem', color: '#374151' }}>{language}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h4 style={{ fontSize: '0.875rem', fontWeight: '500', color: '#1f2937', marginBottom: '0.75rem' }}>Minimum Experience (years)</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <input
                type="range"
                min="0"
                max="15"
                value={filters.experience}
                onChange={(e) => handleFilterChange('experience', parseInt(e.target.value))}
                style={{
                  flex: 1,
                  height: '0.5rem',
                  backgroundColor: '#e5e7eb',
                  borderRadius: '0.5rem',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              />
              <span style={{ fontSize: '0.875rem', fontWeight: '500', color: '#374151', minWidth: '3rem' }}>
                {filters.experience}+ years
              </span>
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h4 style={{ fontSize: '0.875rem', fontWeight: '500', color: '#1f2937', marginBottom: '0.75rem' }}>Hourly Rate Range</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: '#6b7280', marginBottom: '0.25rem' }}>Min</label>
                  <input
                    type="number"
                    min="0"
                    max={filters.priceRange[1]}
                    value={filters.priceRange[0]}
                    onChange={(e) => handlePriceRangeChange(parseInt(e.target.value), filters.priceRange[1])}
                    style={{
                      width: '100%',
                      padding: '0.5rem 0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '0.375rem',
                      fontSize: '0.875rem',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#2563eb'}
                    onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                    placeholder="0"
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: '#6b7280', marginBottom: '0.25rem' }}>Max</label>
                  <input
                    type="number"
                    min={filters.priceRange[0]}
                    max="100"
                    value={filters.priceRange[1]}
                    onChange={(e) => handlePriceRangeChange(filters.priceRange[0], parseInt(e.target.value))}
                    style={{
                      width: '100%',
                      padding: '0.5rem 0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '0.375rem',
                      fontSize: '0.875rem',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#2563eb'}
                    onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                    placeholder="50"
                  />
                </div>
              </div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>
                Range: ${filters.priceRange[0]} - ${filters.priceRange[1]}/hour
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MaidFilter;
