import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Floating Logo component
const FloatingLogo = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Gentle floating animation
    meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    
    // Slow rotation
    meshRef.current.rotation.y += 0.005;
  });
  
  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <torusGeometry args={[1.5, 0.5, 16, 100]} />
      <meshStandardMaterial 
        color="#ff9d26"
        emissive="#ff9d26"
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
};

// Particles effect
const Particles = () => {
  const points = useRef<THREE.Points>(null);
  const particleCount = 500;
  
  // Create particles
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    // Random position in a sphere
    const radius = 10 + Math.random() * 10;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI;
    
    positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i3 + 2] = radius * Math.cos(phi);
    
    // Color gradients (orange to gold)
    const mixFactor = Math.random();
    colors[i3] = 1.0; // R
    colors[i3 + 1] = 0.6 + mixFactor * 0.3; // G
    colors[i3 + 2] = 0.15 + mixFactor * 0.1; // B
  }
  
  useFrame((state) => {
    if (!points.current) return;
    
    // Rotate the entire particle system
    points.current.rotation.y += 0.0005;
    points.current.rotation.x += 0.0002;
  });
  
  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.8}
      />
    </points>
  );
};

// Grid plane
const Grid = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[40, 40, 40, 40]} />
      <meshStandardMaterial
        color="#ff9d26"
        emissive="#ff9d26"
        emissiveIntensity={0.2}
        wireframe={true}
        transparent
        opacity={0.3}
      />
    </mesh>
  );
};

const ThreeJSHero: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
      <fog attach="fog" args={['#000000', 5, 25]} />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ff9d26" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffcc26" />
      
      <FloatingLogo />
      <Particles />
      <Grid />
      
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  );
};

export default ThreeJSHero;