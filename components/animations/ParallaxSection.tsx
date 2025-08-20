'use client';

import React from 'react';
import { useEffect, useRef } from 'react';
import './ParallaxSection.css'; // Import your CSS for styling

const ParallaxSection: React.FC = () => {
    const parallaxRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if (parallaxRef.current) {
            const scrollPosition = window.scrollY;
            parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.5}px)`; // Parallax effect
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="parallax-section" ref={parallaxRef}>
            <div className="parallax-background" /> {/* Background layer */}
            <div className="parallax-content">
                <h1 className="parallax-title">Elevate Your Beauty</h1>
                <p className="parallax-description">Discover luxury cosmetics that redefine elegance.</p>
            </div>
        </div>
    );
};

export default ParallaxSection;