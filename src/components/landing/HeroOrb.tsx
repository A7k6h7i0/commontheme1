import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial, Sphere, Stars } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

function CoreOrb() {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.15;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2;
    const { x, y } = state.pointer;
    ref.current.position.x += (x * 0.6 - ref.current.position.x) * 0.05;
    ref.current.position.y += (y * 0.4 - ref.current.position.y) * 0.05;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <Icosahedron ref={ref} args={[1.4, 4]}>
        <MeshDistortMaterial
          color="#7c3aed"
          emissive="#22d3ee"
          emissiveIntensity={0.6}
          roughness={0.15}
          metalness={0.9}
          distort={0.45}
          speed={1.6}
        />
      </Icosahedron>
    </Float>
  );
}

function Halo() {
  return (
    <Float speed={0.6} rotationIntensity={0.4} floatIntensity={0.6}>
      <Sphere args={[2.2, 64, 64]}>
        <meshBasicMaterial color="#ec4899" wireframe transparent opacity={0.15} />
      </Sphere>
    </Float>
  );
}

export function HeroOrb() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#22d3ee" />
      <pointLight position={[-5, -3, -5]} intensity={2} color="#ec4899" />
      <pointLight position={[0, 5, -5]} intensity={1.5} color="#7c3aed" />
      <Suspense fallback={null}>
        <CoreOrb />
        <Halo />
        <Stars radius={50} depth={50} count={1500} factor={3} saturation={1} fade speed={1} />
      </Suspense>
    </Canvas>
  );
}
