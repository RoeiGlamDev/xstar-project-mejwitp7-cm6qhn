import React from 'react';
import './HeroSection.css'; // Importing CSS for styling

const HeroSection: React.FC = () => {
    return (
        <div className="hero-container">
            <div className="hero-content">
                <h1 className="hero-title">Elevate Your Beauty</h1>
                <p className="hero-subtitle">Discover the luxury of GlamCS cosmetics</p>
                <button className="hero-button">Shop Now</button>
            </div>
            <div className="hero-image">
                <img src="/path/to/your/3d-design.png" alt="Luxury Cosmetics" /> {/* Replace with actual image path */}
            </div>
        </div>
    );
};

export default HeroSection;