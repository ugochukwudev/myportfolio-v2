import React, { useRef } from "react";
import { useLoader, useFrame } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas } from "@react-three/fiber";

function Model() {
  const imgcomp = "/desktop_pc/scene.gltf" || null;
  const gltf = useLoader(GLTFLoader, "/desktop_pc/scene.gltf");
  const modelRef = useRef();

  useFrame(() => {
    // Rotate the model in the scene
    modelRef.current.rotation.y += 0.01;
  });

  return <primitive ref={modelRef} object={gltf.scene} position={[0, 0, 0]} />;
}

export default function GPT() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Model />
    </Canvas>
  );
}
