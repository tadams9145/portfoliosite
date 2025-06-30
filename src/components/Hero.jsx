import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import TerrainScene from '../scenes/TerrainScene';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <Suspense fallback={
          <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800" />
        }>
          <TerrainScene />
        </Suspense>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80 dark:to-slate-950/80" />
      
      {/* Main Content */}
      <div className="relative h-full flex items-center justify-center px-4">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-semibold text-slate-900 dark:text-white mb-4">
              Stone Timber Technologies
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
              Advanced AI systems and geospatial intelligence for defense and security
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#projects"
              className="btn-primary inline-flex items-center group"
            >
              View Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="btn-secondary inline-flex items-center"
            >
              Contact Us
            </a>
          </motion.div>
          
          {/* Veteran owned badge */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-900 text-sm text-slate-600 dark:text-slate-400">
              <span className="w-2 h-2 bg-accent-green rounded-full mr-2"></span>
              Veteran Owned • USA Based
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <a href="#about" className="block p-2 hover:opacity-70 transition-opacity">
          <ChevronDown className="w-6 h-6 text-slate-400 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
} 