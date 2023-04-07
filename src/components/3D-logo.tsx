import type * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Hair: THREE.Mesh;
    Tail: THREE.Mesh;
    Base: THREE.Mesh;
    body: THREE.Mesh;
    Ears: THREE.Mesh;
    Eyes: THREE.Mesh;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null);
  const { nodes } = useGLTF("/fullbody-logo-rigged-posed.glb") as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Hair"
          castShadow
          receiveShadow
          geometry={nodes.Hair.geometry}
        >
          <meshStandardMaterial
            color={0xffffff}
            roughness={0}
            metalness={0.2}
          />
        </mesh>
        <mesh
          name="Tail"
          castShadow
          receiveShadow
          geometry={nodes.Tail.geometry}
        >
          <meshStandardMaterial
            color={0xffffff}
            roughness={0}
            metalness={0.2}
          />
        </mesh>
        <mesh
          name="Base"
          castShadow
          receiveShadow
          geometry={nodes.Base.geometry}
        >
          <meshStandardMaterial
            color={0xffffff}
            roughness={0}
            metalness={0.2}
          />
        </mesh>
        <mesh
          name="body"
          castShadow
          receiveShadow
          geometry={nodes.body.geometry}
          position={[0, 0.18, 0.25]}
        >
          <meshStandardMaterial
            color={0xffffff}
            roughness={0}
            metalness={0.2}
          />
        </mesh>
        <mesh
          name="Ears"
          castShadow
          receiveShadow
          geometry={nodes.Ears.geometry}
          position={[0, 0.18, 0.25]}
        >
          <meshStandardMaterial
            color={0xffffff}
            roughness={0}
            metalness={0.2}
          />
        </mesh>
        <mesh
          name="Eyes"
          castShadow
          receiveShadow
          geometry={nodes.Eyes.geometry}
          position={[0, 0.18, 0.25]}
        >
          <meshStandardMaterial
            color={0xffffff}
            roughness={0}
            metalness={0.2}
          />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/fullbody-logo-rigged-posed.glb");
