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
      <Lights />
      <Boxes frame={frame} />
      <Points points={frame.points} />
      {/* <Ground /> */}
      <CameraControls />
    </Canvas>
  );
}

// function Ground() {
//   const gridConfig = {
//     cellSize: 0.5,
//     cellThickness: 0.5,
//     cellColor: '#6f6f6f',
//     sectionSize: 3,
//     sectionThickness: 1,
//     sectionColor: '#9d4b4b',
//     fadeDistance: 30,
//     fadeStrength: 1,
//     followCamera: true,
//     infiniteGrid: true
//   }
//   return <Grid rotation={[0,0,0]}  position={[0, -0.01, 0]} args={[10.5, 10.5]} {...gridConfig} />
// }

function Lights() {
  return (
    <>
      {/* Luz ambiental suave, sin ser tan intensa */}
      <ambientLight intensity={0.2} />

      {/* Luz direccional simulando el sol desde la derecha */}
      <directionalLight
        position={[10, 10, 10]} // Lado derecho y arriba
        intensity={0.7} // Menos intensidad para no ser tan fuerte
        color={0xffcc00} // Color amarillo cálido, simulando el sol
        castShadow={true} // Para lanzar sombras
        shadow-mapSize-width={1024} // Ajustar resolución de la sombra
        shadow-mapSize-height={1024}
        shadow-camera-near={0.5} // Ajustes de la cámara de sombras
        shadow-camera-far={500}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {/* Luz puntual en el lado izquierdo */}
      <pointLight
        position={[-10, -10, -10]} // A la izquierda, para equilibrar la iluminación
        intensity={0.2} // Baja intensidad
        decay={2} // Decaimiento de la luz
      />
    </>
  );
}
