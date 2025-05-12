'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type QuickShopContextType = {
  isOpen: boolean;
  openQuickShop: () => void;
  closeQuickShop: () => void;
};

const QuickShopContext = createContext<QuickShopContextType | undefined>(undefined);

export function QuickShopProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openQuickShop = () => setIsOpen(true);
  const closeQuickShop = () => setIsOpen(false);

  return (
    <QuickShopContext.Provider value={{ isOpen, openQuickShop, closeQuickShop }}>
      {children}
    </QuickShopContext.Provider>
  );
}

export function useQuickShop() {
  const ctx = useContext(QuickShopContext);
  if (!ctx) throw new Error('useCart must be used within <CartProvider>');
  return ctx;
}
