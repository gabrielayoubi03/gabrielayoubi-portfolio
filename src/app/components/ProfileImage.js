'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className="relative w-full max-w-xl overflow-hidden rounded-2xl shadow-2xl"
    >
      <Image
        src="/images/drummer-photo.jpg"
        alt="Gabriel playing drums"
        width={800}
        height={800}
        className="object-cover"
        priority
      />
    </motion.div>
  );
} 