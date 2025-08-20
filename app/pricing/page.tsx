import React from 'react';
import './PricingPage.css'; // Importing CSS for styling

const PricingPage: React.FC = () => {
    return (
        <div className="pricing-page">
            <header className="header">
                <h1 className="title">GlamCS Pricing</h1>
                <p className="subtitle">Luxury Cosmetics at Unbeatable Prices</p>
            </header>
            <section className="pricing-options">
                <div className="pricing-card">
                    <h2 className="card-title">Basic Package</h2>
                    <p className="price">$29.99</p>
                    <ul className="features">
                        <li>3 High-End Products</li>
                        <li>Free Shipping</li>
                        <li>Exclusive Access to Promotions</li>
                    </ul>
                    <button className="btn">Choose Package</button>
                </div>
                <div className="pricing-card">
                    <h2 className="card-title">Premium Package</h2>
                    <p className="price">$49.99</p>
                    <ul className="features">
                        <li>5 Luxury Products</li>
                        <li>Free Shipping</li>
                        <li>Exclusive Access to Promotions</li>
                        <li>Personalized Consultation</li>
                    </ul>
                    <button className="btn">Choose Package</button>
                </div>
                <div className="pricing-card">
                    <h2 className="card-title">Deluxe Package</h2>
                    <p className="price">$79.99</p>
                    <ul className="features">
                        <li>10 Premium Products</li>
                        <li>Free Shipping</li>
                        <li>Exclusive Access to Promotions</li>
                        <li>Personalized Consultation</li>
                        <li>VIP Support</li>
                    </ul>
                    <button className="btn">Choose Package</button>
                </div>
            </section>
            <footer className="footer">
                <p>Join the GlamCS family and elevate your beauty routine!</p>
            </footer>
        </div>
    );
};

export default PricingPage;