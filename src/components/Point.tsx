import { Point as PointType } from '../types';
import { Points as PointsDrei, PointMaterial } from '@react-three/drei';

export function Points(props: { points: PointType[] }) {
  const positions = new Float32Array(props.points.length * 3);

  props.points.forEach(([x, y, z], i) => positions.set([x, y, z], i * 3));

  return (
    <>
      <PointsDrei positions={positions}>
        <PointMaterial vertexColors size={0.1} />
      </PointsDrei>
    </>
  );
}
