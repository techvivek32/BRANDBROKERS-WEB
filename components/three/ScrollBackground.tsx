"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import { useScroll } from "framer-motion";
import * as THREE from "three";

function AnimatedParticles() {
  const meshRef = useRef<THREE.Points>(null);
  const { scrollYProgress } = useScroll();

  const particleCount = 150;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 40;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
      
      // React to scroll
      const scrollOffset = scrollYProgress.get();
      meshRef.current.position.y = scrollOffset * 5;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="currentColor"
        size={0.03}
        transparent
        opacity={0.4}
        sizeAttenuation={true}
      />
    </points>
  );
}

function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 1;
    }
  });

  return (
    <mesh ref={meshRef} position={[8, 0, -8]}>
      <octahedronGeometry args={[1.5, 0]} />
      <meshBasicMaterial
        color="currentColor"
        wireframe
        transparent
        opacity={0.08}
      />
    </mesh>
  );
}

function WaveGrid() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime * 0.5;
      const geometry = meshRef.current.geometry as THREE.PlaneGeometry;
      const positions = geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const y = positions[i + 1];
        positions[i + 2] = Math.sin(x * 0.05 + time) * Math.cos(y * 0.05 + time) * 0.3;
      }
      
      geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -15]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[30, 30, 30, 30]} />
      <meshBasicMaterial
        color="currentColor"
        wireframe
        transparent
        opacity={0.03}
      />
    </mesh>
  );
}

export default function ScrollBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {/* Simple subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
}