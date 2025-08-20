import React from 'react';
import './AboutSection.css'; // Importing CSS for styling

const AboutSection: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h1 className="about-title">Welcome to GlamCS</h1>
        <p className="about-description">
          Discover the elegance of our high-end cosmetics line, designed to enhance your natural beauty.
        </p>
        <p className="about-description">
          Our products are crafted with luxury in mind, featuring unique 3D designs and effects that elevate your makeup experience.
        </p>
      </div>
      <div className="about-image-container">
        <img src="/images/about-image.png" alt="GlamCS Cosmetics" className="about-image" />
      </div>
    </section>
  );
};

export default AboutSection;