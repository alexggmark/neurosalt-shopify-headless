'use client';

import { motion } from 'framer-motion';

const messages = [
  "100% CLEAN, NON-IRRITATING",
  "NO ANIMAL TESTING",
  "FREE SHIPPING ON ALL U.S. ORDERS $200+",
];

export default function AnnouncementBar() {
  const repeatedMessages = [...messages, ...messages];

  return (
    <div className="bg-gradient-to-r from-[#081BE5] to-[#05B07C] text-white p-2 text-base uppercase overflow-hidden">
      <motion.div
        className="flex gap-28 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
          duration: 15,
        }}
      >
        {repeatedMessages.map((text, index) => (
          <span key={index}>{text}</span>
        ))}
      </motion.div>
    </div>
  );
}
