import type { Maid, MaidFilter } from '../types/maid';
import type { SortOption } from '../components/MaidSort';

export const filterMaids = (maids: Maid[], searchQuery: string, filters: MaidFilter): Maid[] => {
  return maids.filter((maid) => {
    // Search query filtering
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const searchableText = [
        maid.name,
        maid.country,
        maid.description,
        ...maid.skills,
        ...maid.languages,
        ...maid.specializations
      ].join(' ').toLowerCase();
      
      if (!searchableText.includes(query)) {
        return false;
      }
    }

    // Country filtering
    if (filters.countries.length > 0 && !filters.countries.includes(maid.country)) {
      return false;
    }

    // Skills filtering
    if (filters.skills.length > 0 && !filters.skills.some(skill => maid.skills.includes(skill))) {
      return false;
    }

    // Availability filtering
    if (filters.availability.length > 0 && !filters.availability.includes(maid.availability)) {
      return false;
    }

    // Languages filtering
    if (filters.languages.length > 0 && !filters.languages.some(lang => maid.languages.includes(lang))) {
      return false;
    }

    // Experience filtering
    if (filters.experience > 0 && maid.experience < filters.experience) {
      return false;
    }

    // Price range filtering
    if (maid.hourlyRate < filters.priceRange[0] || maid.hourlyRate > filters.priceRange[1]) {
      return false;
    }

    return true;
  });
};

export const sortMaids = (maids: Maid[], sortBy: SortOption): Maid[] => {
  const sortedMaids = [...maids];

  switch (sortBy) {
    case 'name-asc':
      return sortedMaids.sort((a, b) => a.name.localeCompare(b.name));
    
    case 'name-desc':
      return sortedMaids.sort((a, b) => b.name.localeCompare(a.name));
    
    case 'rating-desc':
      return sortedMaids.sort((a, b) => b.rating - a.rating);
    
    case 'rating-asc':
      return sortedMaids.sort((a, b) => a.rating - b.rating);
    
    case 'price-asc':
      return sortedMaids.sort((a, b) => a.hourlyRate - b.hourlyRate);
    
    case 'price-desc':
      return sortedMaids.sort((a, b) => b.hourlyRate - a.hourlyRate);
    
    case 'experience-desc':
      return sortedMaids.sort((a, b) => b.experience - a.experience);
    
    case 'experience-asc':
      return sortedMaids.sort((a, b) => a.experience - b.experience);
    
    case 'reviews-desc':
      return sortedMaids.sort((a, b) => b.reviewCount - a.reviewCount);
    
    case 'reviews-asc':
      return sortedMaids.sort((a, b) => a.reviewCount - b.reviewCount);
    
    default:
      return sortedMaids;
  }
};

export const getDefaultFilters = (): MaidFilter => ({
  countries: [],
  skills: [],
  availability: [],
  priceRange: [0, 50],
  experience: 0,
  languages: []
});

export const getMaidStats = (maids: Maid[]) => {
  const totalMaids = maids.length;
  const availableMaids = maids.filter(maid => maid.isAvailable).length;
  const avgRating = totalMaids > 0 
    ? maids.reduce((sum, maid) => sum + maid.rating, 0) / totalMaids 
    : 0;
  const avgHourlyRate = totalMaids > 0 
    ? maids.reduce((sum, maid) => sum + maid.hourlyRate, 0) / totalMaids 
    : 0;
  const countries = [...new Set(maids.map(maid => maid.country))];
  const totalReviews = maids.reduce((sum, maid) => sum + maid.reviewCount, 0);

  return {
    totalMaids,
    availableMaids,
    avgRating: Math.round(avgRating * 10) / 10,
    avgHourlyRate: Math.round(avgHourlyRate),
    countries: countries.length,
    totalReviews
  };
};

export const getTopRatedMaids = (maids: Maid[], limit: number = 5): Maid[] => {
  return sortMaids(maids, 'rating-desc').slice(0, limit);
};

export const getMostExperiencedMaids = (maids: Maid[], limit: number = 5): Maid[] => {
  return sortMaids(maids, 'experience-desc').slice(0, limit);
};

export const getBestValueMaids = (maids: Maid[], limit: number = 5): Maid[] => {
  // Best value = high rating / price ratio
  return [...maids]
    .sort((a, b) => (b.rating / b.hourlyRate) - (a.rating / a.hourlyRate))
    .slice(0, limit);
};

export const getMaidsByCountry = (maids: Maid[], country: string): Maid[] => {
  return maids.filter(maid => maid.country === country);
};

export const getMaidsBySkill = (maids: Maid[], skill: string): Maid[] => {
  return maids.filter(maid => maid.skills.includes(skill));
};

export const getMaidsByAvailability = (maids: Maid[], availability: string): Maid[] => {
  return maids.filter(maid => maid.availability === availability);
};

export const getPriceRangeStats = (maids: Maid[]) => {
  if (maids.length === 0) return { min: 0, max: 0, avg: 0 };
  
  const prices = maids.map(maid => maid.hourlyRate);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices),
    avg: Math.round(prices.reduce((sum, price) => sum + price, 0) / prices.length)
  };
};
