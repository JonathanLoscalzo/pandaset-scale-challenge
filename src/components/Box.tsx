import { Edges } from '@react-three/drei';
import { useState } from 'react';
import { Tooltip } from './Tooltip';
import { Cuboid, Frame } from '../types';

export function Box(props: { cuboid: Cuboid }) {
  // This reference gives us direct access to the THREE.Mesh object
  // const ref = useRef();
  const [hovered, hover] = useState(false);

  return (
    <mesh
      // ref={ref}
      position={[props.cuboid.position.x, props.cuboid.position.y, props.cuboid.position.z]}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={(event) => (event.stopPropagation(), hover(false))}
      rotation={[0, 0, props.cuboid.yaw]}
    >
      <boxGeometry
        args={[props.cuboid.dimensions.x, props.cuboid.dimensions.y, props.cuboid.dimensions.z]}
      />
      <meshStandardMaterial
        color={hovered ? 'red' : 'cyan'}
        transparent
        opacity={0.5} // Semi-transparent faces
      />
      <Edges
        color={'black'} // Edges/lines of the cuboids should be solid and well defined
      />
      {
        <Tooltip
          hidden={!hovered}
          text={props.cuboid.label}
          position={[
            props.cuboid.dimensions.x,
            props.cuboid.dimensions.y,
            props.cuboid.dimensions.z
          ]}
        />
      }
    </mesh>
  );
}

export function Boxes({ frame }: { frame: Frame }) {
  return frame.cuboids.map((cuboid) => <Box key={cuboid.uuid} cuboid={cuboid} />);
}
