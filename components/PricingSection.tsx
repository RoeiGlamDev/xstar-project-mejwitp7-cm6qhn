import React from 'react';
import './PricingSection.css'; // Importing CSS for styling

const PricingSection: React.FC = () => {
    return (
        <section className="pricing-section">
            <div className="container">
                <h2 className="section-title">Our Pricing</h2>
                <div className="pricing-cards">
                    <div className="pricing-card luxury">
                        <h3>Luxury Package</h3>
                        <p className="price">$299</p>
                        <ul>
                            <li>Premium Products</li>
                            <li>Exclusive Access</li>
                            <li>Personalized Consultation</li>
                        </ul>
                        <button className="btn">Choose Plan</button>
                    </div>
                    <div className="pricing-card standard">
                        <h3>Standard Package</h3>
                        <p className="price">$199</p>
                        <ul>
                            <li>Quality Products</li>
                            <li>Standard Access</li>
                            <li>Email Support</li>
                        </ul>
                        <button className="btn">Choose Plan</button>
                    </div>
                    <div className="pricing-card basic">
                        <h3>Basic Package</h3>
                        <p className="price">$99</p>
                        <ul>
                            <li>Basic Products</li>
                            <li>Community Access</li>
                            <li>FAQ Support</li>
                        </ul>
                        <button className="btn">Choose Plan</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;