export interface Maid {
  id: string;
  name: string;
  age: number;
  country: string;
  image: string;
  gallery: string[];
  description?: string;
  skills: string[];
  experience: number; // years of experience
  languages: string[];
  availability: 'full-time' | 'part-time' | 'flexible';
  hourlyRate: number;
  rating: number;
  reviewCount: number;
  isAvailable: boolean;
  specializations: string[];
  certifications: string[];
  references: number;
}

export interface MaidCardProps {
  maid: Maid;
  onAddToFavorites: (maid: Maid) => void;
  onAddToWatchLater: (maid: Maid) => void;
  isInFavorites: boolean;
  isInWatchLater: boolean;
}

export interface MaidFilter {
  countries: string[];
  skills: string[];
  availability: string[];
  priceRange: [number, number];
  experience: number;
  languages: string[];
}
