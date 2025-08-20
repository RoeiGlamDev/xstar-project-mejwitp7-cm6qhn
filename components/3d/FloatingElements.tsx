import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const FloatingElements: React.FC = () => {
  return (
    <Canvas
      style={{ height: '100vh', background: 'white' }} // Full height canvas with white background
    >
      <ambientLight intensity={0.5} /> // Soft ambient light
      <directionalLight position={[0, 10, 5]} intensity={1} /> // Directional light for highlights
      <OrbitControls /> // Allow user to orbit around the scene

      {/* Floating Sphere */}
      <mesh position={[-1.5, 0, 0]} scale={[1.5, 1.5, 1.5]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#FF8C00" metalness={0.5} roughness={0.1} /> {/* Orange color */}
      </mesh>

      {/* Floating Cube */}
      <mesh position={[1.5, 0, 0]} scale={[1, 1, 1]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#FFFFFF" metalness={0.7} roughness={0.2} /> {/* White color */}
      </mesh>

      {/* Floating Torus */}
      <mesh position={[0, 1.5, 0]} scale={[0.75, 0.75, 0.75]}>
        <torusGeometry args={[0.5, 0.2, 16, 100]} />
        <meshStandardMaterial color="#FF8C00" metalness={0.3} roughness={0.4} /> {/* Orange color */}
      </mesh>
    </Canvas>
  );
};

export default FloatingElements;