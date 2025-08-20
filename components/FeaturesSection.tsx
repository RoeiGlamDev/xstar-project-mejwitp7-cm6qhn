import React from 'react';
import './FeaturesSection.css'; // Importing CSS for styling

const featuresData = [
  {
    title: 'Luxury Quality',
    description: 'Experience the finest ingredients in our products for a luxurious feel.',
    icon: '💎', // Placeholder for a luxury icon
  },
  {
    title: 'Elegant Design',
    description: 'Our packaging is designed to reflect sophistication and elegance.',
    icon: '🎨', // Placeholder for a design icon
  },
  {
    title: '3D Effects',
    description: 'Enjoy immersive 3D effects in our product displays.',
    icon: '✨', // Placeholder for a 3D effects icon
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section">
      <h2 className="features-title">Our Features</h2>
      <div className="features-container">
        {featuresData.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;