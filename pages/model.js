import { createRoot } from 'react-dom/client';
import React, { useRef, useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { Canvas, useFrame, Suspense } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// optional TODO: Load a model using three.js and then use a pixel/blur filter.

function Model() {
  const model = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const gltf = useLoader(GLTFLoader, '/models/wallet2.gltf');

  useFrame((state, delta) => (model.current.rotation.y += 0.01));

  return (
    <mesh
      ref={model}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
      scale={!active ? 1.2 : 1}
    >
      <primitive object={gltf.scene} />
    </mesh>
  );
}

export default function Scene() {
  return (
    <div className='h-screen bg-zinc-100 overflow-y-scroll'>
      <Canvas>
        <ambientLight />
        {/* <pointLight position={[10, 10, 10]} /> */}
        <Model />
      </Canvas>
    </div>
  );
}

if (process.window) {
  createRoot(document.getElementById('root')).render(<Scene />);
}
