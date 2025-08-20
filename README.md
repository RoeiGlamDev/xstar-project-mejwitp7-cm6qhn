import React from 'react';

const README: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <h1>GlamCS Cosmetics Website</h1>
      <h2>Overview</h2>
      <p>
        Welcome to the GlamCS project! This is a high-end cosmetics website designed with elegance in mind.
        The color scheme features luxurious orange and white tones, complemented by stunning 3D designs and effects.
      </p>
      
      <h2>Features</h2>
      <ul>
        <li>Elegant and high-end design</li>
        <li>Luxurious color palette: Orange and White</li>
        <li>3D designs and effects for a modern look</li>
        <li>User-friendly navigation</li>
        <li>Responsive design for all devices</li>
      </ul>

      <h2>Installation</h2>
      <p>
        To get started with the GlamCS project, clone the repository and install the necessary dependencies:
      </p>
      <pre>
        <code>
          git clone https://github.com/yourusername/glamcs.git
          cd glamcs
          npm install
        </code>
      </pre>

      <h2>Usage</h2>
      <p>
        After installation, you can start the development server with:
      </p>
      <pre>
        <code>
          npm start
        </code>
      </pre>
      <p>
        Open your browser and navigate to <strong>http://localhost:3000</strong> to view the website.
      </p>

      <h2>Contributing</h2>
      <p>
        We welcome contributions! Please fork the repository and submit a pull request with your changes.
      </p>

      <h2>License</h2>
      <p>
        This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.
      </p>
    </div>
  );
};

export default README;