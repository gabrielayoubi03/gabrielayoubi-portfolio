'use client';

import Image from "next/image";
import AnimatedIntro from './components/AnimatedIntro';
import ProfileImage from './components/ProfileImage';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main>
      {/* Hero Section with Animation */}
      <section className="min-h-screen relative">
        <AnimatedIntro />
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="mt-4">Your introduction here</p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {/* Project cards will go here */}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold">Skills</h2>
          <div className="mt-8">
            {/* Skills content will go here */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold">Contact</h2>
          {/* Contact form will go here later */}
        </div>
      </section>
    </main>
  );
}
