'use client';

import React from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const Slide = styled.div<{ active: boolean }>`
  width: 100%;
  transition: transform 0.5s ease-in-out;
  transform: ${({ active }) => (active ? 'translateX(0)' : 'translateX(100%)')};
  opacity: ${({ active }) => (active ? 1 : 0)};
  position: absolute;
  top: 0;
  left: 0;
  background: white; // Background color for slides
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); // Luxurious shadow effect
  border-radius: 10px; // Rounded corners for elegance
`;

const SliderDots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Dot = styled.div<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ active }) => (active ? 'orange' : '#ccc')}; // Active dot color
  margin: 0 5px;
  cursor: pointer;
`;

const Slider: React.FC<{ slides: React.ReactNode[] }> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <SliderContainer>
      {slides.map((slide, index) => (
        <Slide key={index} active={index === currentSlide}>
          {slide}
        </Slide>
      ))}
      <SliderDots>
        {slides.map((_, index) => (
          <Dot key={index} active={index === currentSlide} onClick={() => setCurrentSlide(index)} />
        ))}
      </SliderDots>
    </SliderContainer>
  );
};

export default Slider;