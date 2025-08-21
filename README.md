# MaidMatch - Domestic Worker Hiring Platform

A modern React + Vite website for hiring domestic workers, built with TypeScript and Tailwind CSS.

## Features

### 🏠 Home Page
- **Hero Section**: Full-width background with prominent "See Maids" call-to-action
- **About Us**: Company description and mission
- **Vision Section**: Three pillars of trust, quality service, and easy matching
- **Footer**: Contact information and social media links

### 👥 Servants Page
- **Grid Layout**: Displays all available domestic workers
- **Maid Cards**: Each card shows:
  - Profile picture
  - Name, age, and country of origin
  - Quick action buttons (favorites, watch later)
  - "View Profile" link
- **Statistics**: Shows available workers, countries, and verification status

### 👤 Individual Maid Page
- **Detailed Profile**: Complete information about the maid
- **Image Gallery**: Multiple photos with thumbnail navigation
- **Action Buttons**: Add to favorites, watch later, and contact
- **Additional Info**: Background verification, references, etc.

### ❤️ Favorites & Watch Later
- **Favorites Page**: View all saved domestic workers
- **Watch Later Page**: Workers saved for later review
- **Local Storage**: Data persists between sessions
- **Empty States**: Helpful messages when lists are empty

## Technology Stack

- **React 19** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Local Storage** - Data persistence

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navigation.tsx   # Top navigation bar
│   ├── MaidCard.tsx     # Individual maid card
│   └── Footer.tsx       # Site footer
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── Servants.tsx    # Maid listing page
│   ├── MaidDetail.tsx  # Individual maid page
│   ├── Favorites.tsx   # Favorites page
│   └── WatchLater.tsx  # Watch later page
├── context/            # React context
│   └── MaidContext.tsx # Global state management
├── types/              # TypeScript type definitions
│   └── maid.ts         # Maid interface
├── data/               # Mock data
│   └── maids.ts        # Sample maid data
└── App.tsx             # Main app component
```

## Getting Started

### Prerequisites
- Node.js 20.19+ or 22.12+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Features in Detail

### Responsive Design
- Mobile-first approach
- Responsive grid layouts
- Touch-friendly interactions

### State Management
- React Context for global state
- Local storage persistence
- Optimistic UI updates

### User Experience
- Smooth transitions and animations
- Loading states and error handling
- Intuitive navigation

### Data Management
- Mock data with realistic profiles
- Image galleries with navigation
- Search and filter ready (backend integration)

## Future Enhancements

- [ ] Backend API integration
- [ ] User authentication
- [ ] Advanced search and filtering
- [ ] Real-time messaging
- [ ] Payment processing
- [ ] Background verification system
- [ ] Multi-language support
- [ ] Mobile app

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact:
- Email: info@maidmatch.com
- Phone: +1 (555) 123-4567
