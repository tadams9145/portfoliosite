import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { usePerformanceOptimization } from '../hooks/usePerformanceOptimization';

// Simple noise function for terrain generation
function noise(x, y) {
  const X = Math.floor(x) & 255;
  const Y = Math.floor(y) & 255;
  const xf = x - Math.floor(x);
  const yf = y - Math.floor(y);
  const dot = xf * yf;
  return Math.sin(dot * Math.PI) * Math.cos(X * Y * 0.1);
}

function TerrainMesh({ quality }) {
  const meshRef = useRef();
  const timeRef = useRef(0);
  
  // Generate terrain geometry
  const geometry = useMemo(() => {
    const resolution = quality === 'low' ? 40 : quality === 'medium' ? 60 : 80;
    const geo = new THREE.PlaneGeometry(50, 50, resolution, resolution);
    const positions = geo.attributes.position.array;
    
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      
      // Simple noise-based terrain
      let height = 0;
      height += noise(x * 0.05, y * 0.05) * 8;
      height += noise(x * 0.1, y * 0.1) * 4;
      height += noise(x * 0.2, y * 0.2) * 2;
      
      positions[i + 2] = height;
    }
    
    geo.computeVertexNormals();
    return geo;
  }, [quality]);
  
  // Subtle animation
  useFrame((state, delta) => {
    if (meshRef.current) {
      timeRef.current += delta * 0.1;
      meshRef.current.rotation.z = Math.sin(timeRef.current) * 0.02;
    }
  });
  
  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]}>
      <meshStandardMaterial
        color="#94a3b8"
        wireframe
        transparent
        opacity={0.3}
        emissive="#94a3b8"
        emissiveIntensity={0.1}
      />
    </mesh>
  );
}

function GridPlane() {
  return (
    <gridHelper 
      args={[100, 50, '#94a3b8', '#94a3b8']} 
      position={[0, -5, 0]}
      material-opacity={0.1}
      material-transparent={true}
    />
  );
}

export default function TerrainScene() {
  const { quality, shouldReduceMotion } = usePerformanceOptimization();
  
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas 
        dpr={quality === 'low' ? 1 : 1.5}
        gl={{ antialias: true, alpha: true }}
      >
        <PerspectiveCamera makeDefault position={[30, 20, 30]} fov={50} />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2.5}
          autoRotate={!shouldReduceMotion}
          autoRotateSpeed={0.2}
          target={[0, -5, 0]}
        />
        
        {/* Subtle lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[50, 50, 50]} intensity={0.3} color="#ffffff" />
        
        {/* Fog for depth */}
        <fog attach="fog" args={['#f1f5f9', 30, 100]} />
        
        {/* Scene objects */}
        <TerrainMesh quality={quality} />
        <GridPlane />
      </Canvas>
    </div>
  );
} 