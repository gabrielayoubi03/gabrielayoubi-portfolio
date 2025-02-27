'use client';

import { motion } from 'framer-motion';
import ProfileImage from './ProfileImage';
import ScrollIndicator from './ScrollIndicator';
import TypeWriter from './TypeWriter';

export default function AnimatedIntro() {
  const descriptions = [
    "Computer Science Student at University of Florida",
    "Software Developer",
    "Undergraduate Researcher",
    "Drummer & Music Enthusiast"
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900 p-4 relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2"
        >
          <ProfileImage />
        </motion.div>

        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white space-y-6 md:w-1/2"
        >
          <h1 className="text-6xl font-bold tracking-tight">
            <TypeWriter text="Hi, I'm Gabriel" speed={150} />
          </h1>
          
          <motion.div className="space-y-4 text-2xl font-light">
            {descriptions.map((text, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 + (index * 1.2) }}
                className="text-gray-200"
              >
                {text}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <ScrollIndicator />
    </div>
  );
}
