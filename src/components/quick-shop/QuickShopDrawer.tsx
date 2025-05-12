'use client';

import { useQuickShop } from './QuickShopProvider';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

export default function QuickShopDrawer() {
  const { isOpen, closeQuickShop } = useQuickShop();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            onClick={closeQuickShop}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.1 }}
            className="fixed right-0 top-0 h-full w-[400px] bg-white shadow-lg z-50 p-6"
          >
            <button onClick={closeQuickShop} className="mb-4">Close</button>
            <h2 className="text-xl font-bold mb-4">Your QuickShop</h2>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
