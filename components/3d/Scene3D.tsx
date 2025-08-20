import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Scene3D: React.FC = () => {
  return (
    <Canvas
      style={{ height: '100vh', background: 'white' }} // Set background to white
      camera={{ position: [0, 0, 5], fov: 50 }} // Camera settings
    >
      <ambientLight intensity={0.5} /> // Ambient light for soft illumination
      <directionalLight color="orange" position={[5, 5, 5]} intensity={1} /> // Directional light for highlights
      <OrbitControls /> // Enable orbit controls for 3D interaction
      {/* Add 3D models or effects here */}
    </Canvas>
  );
};

export default Scene3D;