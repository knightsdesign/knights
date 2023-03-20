"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export const BlackBox = () => (
  <Suspense fallback={null}>
    <Canvas className="mx-auto w-full bg-black object-cover object-center lg:ml-auto">
      <ambientLight intensity={0.3} />
      <directionalLight color="white" position={[0, 2, 5]} />
      <mesh rotation={[Math.PI, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"white"} />
      </mesh>
      <OrbitControls autoRotate enableZoom={false} />
    </Canvas>
  </Suspense>
);
