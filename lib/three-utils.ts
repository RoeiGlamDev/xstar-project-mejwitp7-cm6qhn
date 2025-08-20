import * as THREE from 'three'; // Importing Three.js
import { Canvas } from '@react-three/fiber'; // Importing Canvas from React Three Fiber
import { useEffect, useRef } from 'react'; // Importing hooks from React

const ThreeUtils = () => {
  const meshRef = useRef<THREE.Mesh>(null); // Reference for the mesh

  useEffect(() => {
    const animate = () => {
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.01; // Rotate mesh on X axis
        meshRef.current.rotation.y += 0.01; // Rotate mesh on Y axis
      }
      requestAnimationFrame(animate); // Request next frame
    };
    animate(); // Start animation
  }, []);

  return (
    <Canvas style={{ background: 'white' }}> {/* Canvas with white background */}
      <ambientLight intensity={0.5} /> {/* Ambient light */}
      <pointLight position={[10, 10, 10]} /> {/* Point light */}
      <mesh ref={meshRef}>
        <boxGeometry args={[1, 1, 1]} /> {/* Box geometry */}
        <meshStandardMaterial color="orange" /> {/* Orange material */}
      </mesh>
    </Canvas>
  );
};

export default ThreeUtils; // Default export of the component