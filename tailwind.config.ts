import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Specify the paths to all of the template files
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          light: '#FFA500', // Light orange
          DEFAULT: '#FF8C00', // Default orange
          dark: '#FF4500', // Dark orange
        },
        white: '#FFFFFF', // White color
      },
      boxShadow: {
        luxury: '0 10px 30px rgba(0, 0, 0, 0.1)', // Luxury shadow effect
      },
      spacing: {
        '128': '32rem', // Custom spacing for large elements
      },
      // Add 3D effects and transformations
      transform: {
        '3d': 'perspective(1000px) rotateY(15deg) rotateX(15deg)', // 3D transformation
      },
    },
  },
  plugins: [],
};

export default config;