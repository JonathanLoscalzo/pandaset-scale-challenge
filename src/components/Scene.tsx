import { CameraControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Boxes } from './Box';
import { Lights } from './Lights';
import { Points } from './Point';
import { Frame } from '../types';

export function Scene({ frame }: { frame: Frame }) {
  return (
    <>
      <Canvas style={{ width: '100vw', height: '100vh' }} camera={{ position: [0, -10, 10] }}>
        <Lights />
        <Boxes frame={frame} />
        <Points points={frame.points} />
        <CameraControls />
      </Canvas>
    </>
  );
}
