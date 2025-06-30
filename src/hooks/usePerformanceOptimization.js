import { useState, useEffect } from 'react';

export function usePerformanceOptimization() {
  const [quality, setQuality] = useState('high');
  
  useEffect(() => {
    // Check device capabilities
    const checkPerformance = () => {
      // Check for mobile devices
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      // Check for low-end devices based on hardware concurrency
      const cores = navigator.hardwareConcurrency || 2;
      const isLowEnd = cores <= 2;
      
      // Check memory if available
      const memory = navigator.deviceMemory || 4;
      const isLowMemory = memory <= 4;
      
      // Determine quality setting
      if (isMobile || isLowEnd || isLowMemory) {
        setQuality('low');
      } else if (cores >= 8 && memory >= 8) {
        setQuality('high');
      } else {
        setQuality('medium');
      }
    };
    
    checkPerformance();
  }, []);
  
  return {
    quality,
    isMobile: quality === 'low',
    shouldReduceMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  };
} 