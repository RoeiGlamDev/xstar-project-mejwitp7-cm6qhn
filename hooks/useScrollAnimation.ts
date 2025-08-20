import { useEffect, useState } from 'react';

const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY; // Get current scroll position
    const triggerPoint = 300; // Set a trigger point for animation

    if (scrollTop > triggerPoint) {
      setIsVisible(true); // Show animation if scrolled past trigger point
    } else {
      setIsVisible(false); // Hide animation if above trigger point
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Attach scroll event

    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up event listener
    };
  }, []);

  return isVisible; // Return visibility state
};

export default useScrollAnimation;