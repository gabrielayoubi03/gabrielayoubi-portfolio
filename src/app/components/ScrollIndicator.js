'use client';

import { motion } from 'framer-motion';

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 7 }}
      // Changed 'fixed' to 'absolute'
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-center pointer-events-none"
    >
      <div className="text-lg">Scroll to learn more</div>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        ↓
      </motion.div>
    </motion.div>
  );
}
