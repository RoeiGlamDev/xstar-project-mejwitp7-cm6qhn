import React from 'react';
import './AboutPage.css'; // Import CSS for styling

const AboutPage: React.FC = () => {
    return (
        <div className="about-page">
            <header className="about-header">
                <h1>About GlamCS</h1>
                <p>Your destination for luxurious cosmetics.</p>
            </header>
            <section className="about-content">
                <h2>Our Mission</h2>
                <p>
                    At GlamCS, we believe in empowering beauty through high-quality, elegant cosmetics 
                    that enhance your natural allure. Our products are designed with you in mind, 
                    offering a touch of luxury in every application.
                </p>
                <h2>Our Vision</h2>
                <p>
                    We envision a world where every individual feels confident and beautiful. 
                    Our commitment to quality and elegance ensures that our cosmetics stand out 
                    in both performance and design.
                </p>
            </section>
            <footer className="about-footer">
                <p>© 2023 GlamCS. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default AboutPage;