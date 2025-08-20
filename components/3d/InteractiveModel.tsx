'use client';

import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const InteractiveModel: React.FC = () => {
  const modelRef = useRef<THREE.Group>(null);

  useEffect(() => {
    // Add any animations or effects here
  }, []);

  return (
    <Canvas
      style={{ height: '100vh', background: 'white' }} // Set canvas background
      camera={{ position: [0, 0, 5], fov: 50 }} // Camera settings
    >
      <ambientLight intensity={0.5} /> // Ambient light for soft illumination
      <pointLight position={[10, 10, 10]} intensity={1} /> // Point light for highlights
      <OrbitControls /> // Allow user to rotate the model
      <mesh ref={modelRef}>
        {/* Replace with your 3D model */}
        <boxGeometry args={[1, 1, 1]} /> // Example geometry
        <meshStandardMaterial color="orange" /> // Example material
      </mesh>
    </Canvas>
  );
};

export default InteractiveModel;