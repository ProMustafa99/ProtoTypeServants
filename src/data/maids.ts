import type { Maid } from '../types/maid';

export const maidsData: Maid[] = [
  {
    id: '1',
    name: 'Ana Rodriguez',
    age: 32,
    country: 'Mexico',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
    gallery: [
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
    ],
    description: 'Professional housekeeper with 8 years of experience specializing in deep cleaning and organization. Fluent in Spanish and English.',
    skills: ['Deep Cleaning', 'Organization', 'Laundry', 'Ironing', 'Cooking'],
    experience: 8,
    languages: ['Spanish', 'English'],
    availability: 'full-time',
    hourlyRate: 25,
    rating: 4.8,
    reviewCount: 47,
    isAvailable: true,
    specializations: ['Eco-friendly cleaning', 'Pet-friendly homes'],
    certifications: ['Professional Housekeeping Certificate', 'Food Safety Certificate'],
    references: 12
  },
  {
    id: '2',
    name: 'Fatima Hassan',
    age: 28,
    country: 'Morocco',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    gallery: [
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face'
    ],
    description: 'Skilled cook and housekeeper with expertise in Mediterranean and Middle Eastern cuisine. Excellent with children.',
    skills: ['Cooking', 'Childcare', 'Cleaning', 'Meal Planning', 'Grocery Shopping'],
    experience: 6,
    languages: ['Arabic', 'French', 'English'],
    availability: 'flexible',
    hourlyRate: 30,
    rating: 4.9,
    reviewCount: 38,
    isAvailable: true,
    specializations: ['Mediterranean cuisine', 'Childcare', 'Elderly care'],
    certifications: ['Childcare Certificate', 'Culinary Arts Certificate'],
    references: 15
  },
  {
    id: '3',
    name: 'Elena Popov',
    age: 35,
    country: 'Ukraine',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    gallery: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
    ],
    description: 'Experienced nanny and housekeeper with excellent references. Specializes in early childhood development.',
    skills: ['Childcare', 'Early Education', 'Housekeeping', 'Cooking', 'First Aid'],
    experience: 10,
    languages: ['Ukrainian', 'Russian', 'English'],
    availability: 'full-time',
    hourlyRate: 35,
    rating: 4.7,
    reviewCount: 52,
    isAvailable: true,
    specializations: ['Early childhood development', 'Educational activities'],
    certifications: ['Early Childhood Education', 'First Aid & CPR', 'Montessori Training'],
    references: 18
  },
  {
    id: '4',
    name: 'Priya Patel',
    age: 27,
    country: 'India',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face',
    gallery: [
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
    ],
    description: 'Professional housekeeper with expertise in Indian cuisine and childcare. Very organized and detail-oriented.',
    skills: ['Indian Cooking', 'Housekeeping', 'Childcare', 'Organization', 'Laundry'],
    experience: 5,
    languages: ['Hindi', 'English', 'Gujarati'],
    availability: 'part-time',
    hourlyRate: 28,
    rating: 4.6,
    reviewCount: 29,
    isAvailable: true,
    specializations: ['Indian cuisine', 'Spice management', 'Traditional cleaning methods'],
    certifications: ['Food Safety Certificate', 'Childcare Certificate'],
    references: 9
  },
  {
    id: '5',
    name: 'Isabella Silva',
    age: 29,
    country: 'Brazil',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop&crop=face',
    gallery: [
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
    ],
    description: 'Energetic and reliable housekeeper with excellent organizational skills. Loves working with families.',
    skills: ['Housekeeping', 'Organization', 'Cooking', 'Pet Care', 'Garden Maintenance'],
    experience: 7,
    languages: ['Portuguese', 'Spanish', 'English'],
    availability: 'flexible',
    hourlyRate: 26,
    rating: 4.8,
    reviewCount: 41,
    isAvailable: true,
    specializations: ['Pet-friendly homes', 'Garden maintenance', 'Event preparation'],
    certifications: ['Professional Housekeeping', 'Pet Care Certificate'],
    references: 14
  },
  {
    id: '6',
    name: 'Maria Santos',
    age: 31,
    country: 'Philippines',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
    gallery: [
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face'
    ],
    description: 'Dedicated housekeeper with strong attention to detail. Specializes in maintaining large homes and estates.',
    skills: ['Deep Cleaning', 'Laundry', 'Ironing', 'Cooking', 'Inventory Management'],
    experience: 9,
    languages: ['Tagalog', 'English'],
    availability: 'full-time',
    hourlyRate: 32,
    rating: 4.9,
    reviewCount: 63,
    isAvailable: true,
    specializations: ['Large home maintenance', 'Luxury home care', 'Inventory management'],
    certifications: ['Professional Housekeeping', 'Luxury Home Care Certificate'],
    references: 20
  },
  {
    id: '7',
    name: 'Sophie Dubois',
    age: 26,
    country: 'France',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    gallery: [
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face'
    ],
    description: 'French-trained housekeeper with expertise in fine dining and wine service. Perfect for upscale households.',
    skills: ['Fine Dining', 'Wine Service', 'Housekeeping', 'Event Planning', 'French Cooking'],
    experience: 4,
    languages: ['French', 'English'],
    availability: 'part-time',
    hourlyRate: 40,
    rating: 4.7,
    reviewCount: 25,
    isAvailable: true,
    specializations: ['Fine dining', 'Wine pairing', 'Event hosting'],
    certifications: ['French Culinary Institute', 'Wine Service Certificate'],
    references: 11
  },
  {
    id: '8',
    name: 'Yuki Tanaka',
    age: 33,
    country: 'Japan',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    gallery: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
    ],
    description: 'Japanese housekeeper with expertise in minimalist organization and traditional cleaning methods.',
    skills: ['Minimalist Organization', 'Traditional Cleaning', 'Japanese Cooking', 'Zen Arrangement', 'Laundry'],
    experience: 6,
    languages: ['Japanese', 'English'],
    availability: 'flexible',
    hourlyRate: 35,
    rating: 4.8,
    reviewCount: 34,
    isAvailable: true,
    specializations: ['Minimalist living', 'Traditional Japanese cleaning', 'Zen organization'],
    certifications: ['Japanese Housekeeping Certificate', 'Zen Organization Training'],
    references: 13
  },
  {
    id: '9',
    name: 'Aisha Al-Zahra',
    age: 30,
    country: 'Egypt',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face',
    gallery: [
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
    ],
    description: 'Experienced housekeeper with expertise in Middle Eastern cuisine and hospitality traditions.',
    skills: ['Middle Eastern Cooking', 'Hospitality', 'Housekeeping', 'Guest Services', 'Event Planning'],
    experience: 8,
    languages: ['Arabic', 'English', 'French'],
    availability: 'full-time',
    hourlyRate: 30,
    rating: 4.6,
    reviewCount: 42,
    isAvailable: true,
    specializations: ['Middle Eastern cuisine', 'Hospitality services', 'Guest accommodation'],
    certifications: ['Hospitality Management', 'Middle Eastern Cuisine Certificate'],
    references: 16
  },
  {
    id: '10',
    name: 'Olga Petrov',
    age: 34,
    country: 'Russia',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop&crop=face',
    gallery: [
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
    ],
    description: 'Professional housekeeper with strong work ethic and attention to detail. Excellent with elderly care.',
    skills: ['Elderly Care', 'Housekeeping', 'Cooking', 'Medication Reminders', 'Companionship'],
    experience: 12,
    languages: ['Russian', 'English'],
    availability: 'full-time',
    hourlyRate: 28,
    rating: 4.9,
    reviewCount: 58,
    isAvailable: true,
    specializations: ['Elderly care', 'Companionship', 'Medication management'],
    certifications: ['Elderly Care Certificate', 'First Aid & CPR', 'Medication Management'],
    references: 22
  }
];

// Available countries for filtering
export const availableCountries = [
  'Mexico', 'Morocco', 'Ukraine', 'India', 'Brazil', 
  'Philippines', 'France', 'Japan', 'Egypt', 'Russia'
];

// Available skills for filtering
export const availableSkills = [
  'Deep Cleaning', 'Organization', 'Laundry', 'Ironing', 'Cooking',
  'Childcare', 'Meal Planning', 'Grocery Shopping', 'Early Education',
  'First Aid', 'Indian Cooking', 'Pet Care', 'Garden Maintenance',
  'Fine Dining', 'Wine Service', 'Event Planning', 'French Cooking',
  'Minimalist Organization', 'Traditional Cleaning', 'Japanese Cooking',
  'Zen Arrangement', 'Middle Eastern Cooking', 'Hospitality',
  'Guest Services', 'Elderly Care', 'Medication Reminders', 'Companionship'
];

// Available languages for filtering
export const availableLanguages = [
  'Spanish', 'English', 'Arabic', 'French', 'Ukrainian', 'Russian',
  'Hindi', 'Gujarati', 'Portuguese', 'Tagalog', 'Japanese'
];
