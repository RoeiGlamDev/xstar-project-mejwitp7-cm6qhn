import React from 'react';
import { keyframes } from 'styled-components';
import styled from 'styled-components';

// Define keyframes for the gradient animation
const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

// Styled component for the gradient background
const GradientBackgroundStyled = styled.div`
  height: 100vh; // Full height
  width: 100%; // Full width
  background: linear-gradient(270deg, #FFA500, #FFFFFF, #FFA500); // Orange to white gradient
  background-size: 400% 400%; // For smooth animation
  animation: ${gradientAnimation} 15s ease infinite; // Animation settings
`;

// Functional component
const GradientBackground: React.FC = ({ children }) => {
  return <GradientBackgroundStyled>{children}</GradientBackgroundStyled>;
};

export default GradientBackground;