import { Point as PointType } from '../types';
import { Points as PointsDrei, PointMaterial } from '@react-three/drei';
import { generateColor } from '../utils';

export function Points(props: { points: PointType[] }) {
  const positions = new Float32Array(props.points.length * 3);
  const colors = new Float32Array(props.points.length * 3);

  props.points.forEach(([x, y, z], i) => {
    positions.set([x, y, z], i * 3);
    const color = generateColor(z);
    colors.set([color.r, color.g, color.b], i * 3);
  });

  return (
    <>
      <PointsDrei positions={positions} colors={colors} frustumCulled={false}>
        <PointMaterial vertexColors size={0.1} />
      </PointsDrei>
    </>
  );
}
