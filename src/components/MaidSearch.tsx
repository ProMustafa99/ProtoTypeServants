import React, { useState } from 'react';

interface MaidSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSearchSubmit: () => void;
}

const MaidSearch: React.FC<MaidSearchProps> = ({
  searchQuery,
  onSearchChange,
  onSearchSubmit
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearchSubmit();
    }
  };

  const clearSearch = () => {
    onSearchChange('');
    onSearchSubmit();
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit} style={{ padding: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Search Icon */}
          <div style={{ flexShrink: 0 }}>
            <svg style={{ width: '1.25rem', height: '1.25rem', color: '#9ca3af' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Search Input */}
          <div style={{ flex: 1 }}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Search by name, skills, or description..."
              style={{
                width: '100%',
                padding: '0.5rem 0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                outline: 'none'
              }}
              onFocus={(e) => e.target.style.borderColor = '#2563eb'}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            />
          </div>

          {/* Clear Button */}
          {searchQuery && (
            <button
              type="button"
              onClick={clearSearch}
              style={{
                flexShrink: 0,
                padding: '0.5rem',
                color: '#9ca3af',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#6b7280'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
            >
              <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}

          {/* Search Button */}
          <button
            type="submit"
            style={{
              flexShrink: 0,
              backgroundColor: '#2563eb',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.875rem',
              fontWeight: '500',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
          >
            Search
          </button>

          {/* Advanced Search Toggle */}
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            style={{
              flexShrink: 0,
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

        {/* Advanced Search Options */}
        {isExpanded && (
          <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #e5e7eb' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
              {/* Search Tips */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <h4 style={{ fontSize: '0.875rem', fontWeight: '500', color: '#1f2937' }}>Search Tips</h4>
                <ul style={{ fontSize: '0.75rem', color: '#6b7280', listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '0.25rem' }}>• Use quotes for exact phrases</li>
                  <li style={{ marginBottom: '0.25rem' }}>• Search by country names</li>
                  <li style={{ marginBottom: '0.25rem' }}>• Use skill keywords</li>
                  <li style={{ marginBottom: '0.25rem' }}>• Search by language</li>
                </ul>
              </div>

              {/* Quick Filters */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <h4 style={{ fontSize: '0.875rem', fontWeight: '500', color: '#1f2937' }}>Quick Filters</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                  {['cooking', 'cleaning', 'childcare', 'elderly care'].map((filter) => (
                    <button
                      key={filter}
                      type="button"
                      onClick={() => onSearchChange(filter)}
                      style={{
                        padding: '0.25rem 0.5rem',
                        backgroundColor: '#f3f4f6',
                        color: '#374151',
                        fontSize: '0.75rem',
                        borderRadius: '0.25rem',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e5e7eb'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              {/* Search Examples */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <h4 style={{ fontSize: '0.875rem', fontWeight: '500', color: '#1f2937' }}>Examples</h4>
                <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>
                  <button
                    type="button"
                    onClick={() => onSearchChange('Spanish cooking')}
                    style={{
                      display: 'block',
                      textAlign: 'left',
                      background: 'none',
                      border: 'none',
                      color: '#6b7280',
                      cursor: 'pointer',
                      transition: 'color 0.2s',
                      marginBottom: '0.25rem'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#2563eb'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}
                  >
                    "Spanish cooking"
                  </button>
                  <button
                    type="button"
                    onClick={() => onSearchChange('Mexico')}
                    style={{
                      display: 'block',
                      textAlign: 'left',
                      background: 'none',
                      border: 'none',
                      color: '#6b7280',
                      cursor: 'pointer',
                      transition: 'color 0.2s',
                      marginBottom: '0.25rem'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#2563eb'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}
                  >
                    Mexico
                  </button>
                  <button
                    type="button"
                    onClick={() => onSearchChange('full-time')}
                    style={{
                      display: 'block',
                      textAlign: 'left',
                      background: 'none',
                      border: 'none',
                      color: '#6b7280',
                      cursor: 'pointer',
                      transition: 'color 0.2s',
                      marginBottom: '0.25rem'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#2563eb'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}
                  >
                    full-time
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default MaidSearch;
