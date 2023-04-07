"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Model } from "./3D-logo";

export const BlackBox = () => (
  <Suspense fallback={null}>
    <Canvas className="mx-auto w-full object-cover object-center lg:ml-auto">
      <ambientLight intensity={0.2} />
      <directionalLight color="white" position={[0, 2, 5]} intensity={0.3} />
      <directionalLight color="white" position={[0, 2, -5]} intensity={0.3} />

      <Model position={[0, -1.3, 0]} scale={1.2} />
      <OrbitControls autoRotate enableZoom={false} />
    </Canvas>
  </Suspense>
);
