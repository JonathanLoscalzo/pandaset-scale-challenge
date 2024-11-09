import { Canvas } from '@react-three/fiber';

export function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <mesh>
          <boxGeometry />

          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}
