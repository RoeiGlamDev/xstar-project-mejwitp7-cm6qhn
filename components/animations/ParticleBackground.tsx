'use client';

import React, { useEffect } from 'react';
import { useRef } from 'react';
import './ParticleBackground.css'; // Assuming you have a CSS file for styling

const ParticleBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: { x: number; y: number; radius: number; color: string; }[] = [];
        const particleCount = 100; // Number of particles

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 3 + 1, // Radius between 1 and 4
                color: `rgba(255, 165, 0, ${Math.random()})` // Orange color with random opacity
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

            particles.forEach(particle => {
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.fill();
                ctx.closePath();

                // Update particle position
                particle.x += (Math.random() - 0.5) * 2; // Random movement
                particle.y += (Math.random() - 0.5) * 2;

                // Wrap particles around canvas edges
                if (particle.x < 0) particle.x = canvas.width;
                if (particle.x > canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = canvas.height;
                if (particle.y > canvas.height) particle.y = 0;
            });

            requestAnimationFrame(animate); // Loop animation
        };

        animate(); // Start animation

        return () => {
            // Cleanup if necessary
        };
    }, []);

    return <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} className="particle-canvas" />;
};

export default ParticleBackground;