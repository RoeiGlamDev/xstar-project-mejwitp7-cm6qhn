'use client';

import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const ScrollRevealComponent: React.FC = ({ children }) => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      delay: 200,
      easing: 'ease-in-out',
      reset: true,
    });

    sr.reveal('.reveal', { interval: 200 }); // Reveal elements with class 'reveal'
  }, []);

  return <div className="reveal">{children}</div>; // Wrap children with 'reveal' class
};

export default ScrollRevealComponent;