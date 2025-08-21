import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Maid } from '../types/maid';

interface MaidContextType {
  favorites: Maid[];
  watchLater: Maid[];
  addToFavorites: (maid: Maid) => void;
  removeFromFavorites: (maidId: string) => void;
  addToWatchLater: (maid: Maid) => void;
  removeFromWatchLater: (maidId: string) => void;
  isInFavorites: (maidId: string) => boolean;
  isInWatchLater: (maidId: string) => boolean;
}

const MaidContext = createContext<MaidContextType | undefined>(undefined);

export const useMaidContext = () => {
  const context = useContext(MaidContext);
  if (context === undefined) {
    throw new Error('useMaidContext must be used within a MaidProvider');
  }
  return context;
};

interface MaidProviderProps {
  children: ReactNode;
}

export const MaidProvider: React.FC<MaidProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<Maid[]>([]);
  const [watchLater, setWatchLater] = useState<Maid[]>([]);

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem('maidFavorites');
    const savedWatchLater = localStorage.getItem('maidWatchLater');

    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
    if (savedWatchLater) {
      setWatchLater(JSON.parse(savedWatchLater));
    }
  }, []);

  // Save to localStorage whenever favorites or watchLater change
  useEffect(() => {
    localStorage.setItem('maidFavorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('maidWatchLater', JSON.stringify(watchLater));
  }, [watchLater]);

  const addToFavorites = (maid: Maid) => {
    setFavorites(prev => {
      if (!prev.find(f => f.id === maid.id)) {
        return [...prev, maid];
      }
      return prev;
    });
  };

  const removeFromFavorites = (maidId: string) => {
    setFavorites(prev => prev.filter(maid => maid.id !== maidId));
  };

  const addToWatchLater = (maid: Maid) => {
    setWatchLater(prev => {
      if (!prev.find(w => w.id === maid.id)) {
        return [...prev, maid];
      }
      return prev;
    });
  };

  const removeFromWatchLater = (maidId: string) => {
    setWatchLater(prev => prev.filter(maid => maid.id !== maidId));
  };

  const isInFavorites = (maidId: string) => {
    return favorites.some(maid => maid.id === maidId);
  };

  const isInWatchLater = (maidId: string) => {
    return watchLater.some(maid => maid.id === maidId);
  };

  const value: MaidContextType = {
    favorites,
    watchLater,
    addToFavorites,
    removeFromFavorites,
    addToWatchLater,
    removeFromWatchLater,
    isInFavorites,
    isInWatchLater,
  };

  return (
    <MaidContext.Provider value={value}>
      {children}
    </MaidContext.Provider>
  );
};
