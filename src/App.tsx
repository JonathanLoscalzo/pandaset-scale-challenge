import { Canvas } from '@react-three/fiber';
import { CameraControls } from '@react-three/drei';
import './style.css';
import data from '../public/frames/frame_00.json';
import { Frame } from './types';
import { transformToFrame } from './utils';
import { Boxes } from './components/Box';
import { Points } from './components/Point';

export function App() {
  const frame: Frame = transformToFrame(data);

  return (
    <>
      <Scene frame={frame} />
    </>
  );
}

function Scene({ frame }: { frame: Frame }) {
  return (
    <Canvas style={{ width: '100vw', height: '100vh' }}>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Boxes frame={frame} />
      <Points points={frame.points} />
      <CameraControls />
    </Canvas>
  );
}
