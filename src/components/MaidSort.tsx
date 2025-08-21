import React from 'react';

export type SortOption = 
  | 'name-asc'
  | 'name-desc'
  | 'rating-desc'
  | 'rating-asc'
  | 'price-asc'
  | 'price-desc'
  | 'experience-desc'
  | 'experience-asc'
  | 'reviews-desc'
  | 'reviews-asc';

interface MaidSortProps {
  sortBy: SortOption;
  onSortChange: (sortBy: SortOption) => void;
  totalResults: number;
}

const MaidSort: React.FC<MaidSortProps> = ({
  sortBy,
  onSortChange,
  totalResults
}) => {
  const sortOptions = [
    { value: 'name-asc', label: 'Name (A-Z)', icon: '↑' },
    { value: 'name-desc', label: 'Name (Z-A)', icon: '↓' },
    { value: 'rating-desc', label: 'Highest Rated', icon: '⭐' },
    { value: 'rating-asc', label: 'Lowest Rated', icon: '⭐' },
    { value: 'price-asc', label: 'Price (Low to High)', icon: '$' },
    { value: 'price-desc', label: 'Price (High to Low)', icon: '$' },
    { value: 'experience-desc', label: 'Most Experienced', icon: '👥' },
    { value: 'experience-asc', label: 'Least Experienced', icon: '👥' },
    { value: 'reviews-desc', label: 'Most Reviews', icon: '💬' },
    { value: 'reviews-asc', label: 'Least Reviews', icon: '💬' }
  ];

  return (
    <div className="card">
      <div style={{ padding: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Results Count */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
              {totalResults} {totalResults === 1 ? 'result' : 'results'}
            </span>
          </div>

          {/* Sort Options */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as SortOption)}
              style={{
                padding: '0.5rem 0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                outline: 'none',
                backgroundColor: 'white',
                cursor: 'pointer'
              }}
              onFocus={(e) => e.target.style.borderColor = '#2563eb'}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.icon} {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Quick Sort Buttons */}
        <div style={{ marginTop: '0.75rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {[
            { value: 'rating-desc', label: 'Top Rated', color: { background: '#fef3c7', text: '#92400e' } },
            { value: 'price-asc', label: 'Best Value', color: { background: '#dcfce7', text: '#166534' } },
            { value: 'experience-desc', label: 'Most Experienced', color: { background: '#dbeafe', text: '#1e40af' } },
            { value: 'reviews-desc', label: 'Most Reviewed', color: { background: '#f3e8ff', text: '#7c3aed' } }
          ].map((quickSort) => (
            <button
              key={quickSort.value}
              onClick={() => onSortChange(quickSort.value as SortOption)}
              style={{
                padding: '0.25rem 0.75rem',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                fontWeight: '500',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
                backgroundColor: sortBy === quickSort.value ? quickSort.color.background : '#f3f4f6',
                color: sortBy === quickSort.value ? quickSort.color.text : '#6b7280'
              }}
              onMouseEnter={(e) => {
                if (sortBy !== quickSort.value) {
                  e.currentTarget.style.backgroundColor = '#e5e7eb';
                }
              }}
              onMouseLeave={(e) => {
                if (sortBy !== quickSort.value) {
                  e.currentTarget.style.backgroundColor = '#f3f4f6';
                }
              }}
            >
              {quickSort.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MaidSort;
