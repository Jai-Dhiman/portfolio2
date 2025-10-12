import React, { useEffect } from 'react';

const PreloadAssets: React.FC = () => {
  useEffect(() => {
    // Preload critical images
    const criticalImages = [
      '/icons/capture.png',
      '/icons/crescendai.png',
      '/icons/anthropic.png',
      '/icons/southern.png',
      '/icons/actualize.png',
      '/icons/berklee.png',
    ];

    const preloadImage = (src: string) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      link.fetchPriority = 'low';
      document.head.appendChild(link);
    };

    // Preload images with a slight delay to not block critical resources
    const timeoutId = setTimeout(() => {
      criticalImages.forEach(preloadImage);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return null; // This component renders nothing
};

export default PreloadAssets;